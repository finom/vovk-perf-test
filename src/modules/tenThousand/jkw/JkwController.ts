import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkws")
export default class JkwController {
  @operation({
    summary: "Get Jkws",
  })
  @get()
  static getJkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkw",
  })
  @post("{id}")
  static createJkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
