import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgws")
export default class JgwController {
  @operation({
    summary: "Get Jgws",
  })
  @get()
  static getJgws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgw",
  })
  @post("{id}")
  static createJgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
