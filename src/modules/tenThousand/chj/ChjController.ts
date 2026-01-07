import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chj")
export default class ChjController {
  @operation({
    summary: "Get Chj",
  })
  @get()
  static getChj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chj",
  })
  @post("{id}")
  static createChj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
