import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cifs")
export default class CifController {
  @operation({
    summary: "Get Cifs",
  })
  @get()
  static getCifs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cif",
  })
  @post("{id}")
  static createCif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
