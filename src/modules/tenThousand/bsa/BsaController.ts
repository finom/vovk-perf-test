import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsas")
export default class BsaController {
  @operation({
    summary: "Get Bsas",
  })
  @get()
  static getBsas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsa",
  })
  @post("{id}")
  static createBsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
