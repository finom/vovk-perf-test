import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncos")
export default class NcoController {
  @operation({
    summary: "Get Ncos",
  })
  @get()
  static getNcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nco",
  })
  @post("{id}")
  static createNco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
