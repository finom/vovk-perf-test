import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeis")
export default class EeiController {
  @operation({
    summary: "Get Eeis",
  })
  @get()
  static getEeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eei",
  })
  @post("{id}")
  static createEei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
