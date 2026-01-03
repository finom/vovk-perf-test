import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxas")
export default class HxaController {
  @operation({
    summary: "Get Hxas",
  })
  @get()
  static getHxas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxa",
  })
  @post("{id}")
  static createHxa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
