import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isas")
export default class IsaController {
  @operation({
    summary: "Get Isas",
  })
  @get()
  static getIsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isa",
  })
  @post("{id}")
  static createIsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
