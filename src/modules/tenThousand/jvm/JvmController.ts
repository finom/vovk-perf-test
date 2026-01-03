import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvms")
export default class JvmController {
  @operation({
    summary: "Get Jvms",
  })
  @get()
  static getJvms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvm",
  })
  @post("{id}")
  static createJvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
