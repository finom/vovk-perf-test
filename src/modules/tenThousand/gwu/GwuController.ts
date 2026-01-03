import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwus")
export default class GwuController {
  @operation({
    summary: "Get Gwus",
  })
  @get()
  static getGwus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwu",
  })
  @post("{id}")
  static createGwu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
