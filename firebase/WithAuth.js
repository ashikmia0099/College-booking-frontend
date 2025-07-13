"use client";

import React, { useEffect } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { useRouter } from "next/navigation";

function WithAuth(Component) {
  return function AuthWrapper(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user?.email) {
        router.push("/"); // Redirect to home if not logged in
      }
    }, [user, loading]);

    if (loading || !user?.email) {
      return (
        <div className="flex items-center justify-center mx-auto min-h-screen pt-40">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default WithAuth;
