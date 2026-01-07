import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvm")
export default class JvmController {
  @operation({
    summary: "Get Jvm",
  })
  @get()
  static getJvm = procedure({
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
