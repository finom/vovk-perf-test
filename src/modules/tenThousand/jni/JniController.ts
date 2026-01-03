import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnis")
export default class JniController {
  @operation({
    summary: "Get Jnis",
  })
  @get()
  static getJnis = procedure({
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
