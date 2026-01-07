import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgw")
export default class JgwController {
  @operation({
    summary: "Get Jgw",
  })
  @get()
  static getJgw = procedure({
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
