import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngos")
export default class NgoController {
  @operation({
    summary: "Get Ngos",
  })
  @get()
  static getNgos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngo",
  })
  @post("{id}")
  static createNgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
