import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coas")
export default class CoaController {
  @operation({
    summary: "Get Coas",
  })
  @get()
  static getCoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coa",
  })
  @post("{id}")
  static createCoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
