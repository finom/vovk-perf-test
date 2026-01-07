import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ato")
export default class AtoController {
  @operation({
    summary: "Get Ato",
  })
  @get()
  static getAto = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ato",
  })
  @post("{id}")
  static createAto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
