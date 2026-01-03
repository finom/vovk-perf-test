import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdas")
export default class GdaController {
  @operation({
    summary: "Get Gdas",
  })
  @get()
  static getGdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gda",
  })
  @post("{id}")
  static createGda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
