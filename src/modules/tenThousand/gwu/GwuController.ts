import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwu")
export default class GwuController {
  @operation({
    summary: "Get Gwu",
  })
  @get()
  static getGwu = procedure({
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
