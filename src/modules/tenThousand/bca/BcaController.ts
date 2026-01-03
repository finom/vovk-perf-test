import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcas")
export default class BcaController {
  @operation({
    summary: "Get Bcas",
  })
  @get()
  static getBcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bca",
  })
  @post("{id}")
  static createBca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
