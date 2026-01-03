import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfas")
export default class HfaController {
  @operation({
    summary: "Get Hfas",
  })
  @get()
  static getHfas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfa",
  })
  @post("{id}")
  static createHfa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
