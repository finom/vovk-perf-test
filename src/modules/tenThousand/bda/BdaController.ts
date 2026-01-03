import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdas")
export default class BdaController {
  @operation({
    summary: "Get Bdas",
  })
  @get()
  static getBdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bda",
  })
  @post("{id}")
  static createBda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
