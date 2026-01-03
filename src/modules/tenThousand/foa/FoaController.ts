import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foas")
export default class FoaController {
  @operation({
    summary: "Get Foas",
  })
  @get()
  static getFoas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Foa",
  })
  @post("{id}")
  static createFoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
