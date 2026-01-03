import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqas")
export default class FqaController {
  @operation({
    summary: "Get Fqas",
  })
  @get()
  static getFqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqa",
  })
  @post("{id}")
  static createFqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
