import { procedure, prefix, get, post, operation } from "vovk";

@prefix("equs")
export default class EquController {
  @operation({
    summary: "Get Equs",
  })
  @get()
  static getEqus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Equ",
  })
  @post("{id}")
  static createEqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
