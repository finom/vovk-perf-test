import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixas")
export default class IxaController {
  @operation({
    summary: "Get Ixas",
  })
  @get()
  static getIxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixa",
  })
  @post("{id}")
  static createIxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
