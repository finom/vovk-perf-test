import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxas")
export default class BxaController {
  @operation({
    summary: "Get Bxas",
  })
  @get()
  static getBxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bxa",
  })
  @post("{id}")
  static createBxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
