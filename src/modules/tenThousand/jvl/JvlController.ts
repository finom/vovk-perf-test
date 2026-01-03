import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvls")
export default class JvlController {
  @operation({
    summary: "Get Jvls",
  })
  @get()
  static getJvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jvl",
  })
  @post("{id}")
  static createJvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
