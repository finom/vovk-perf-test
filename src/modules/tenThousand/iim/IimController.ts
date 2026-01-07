import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iim")
export default class IimController {
  @operation({
    summary: "Get Iim",
  })
  @get()
  static getIim = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iim",
  })
  @post("{id}")
  static createIim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
