import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jni")
export default class JniController {
  @operation({
    summary: "Get Jni",
  })
  @get()
  static getJni = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jni",
  })
  @post("{id}")
  static createJni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
