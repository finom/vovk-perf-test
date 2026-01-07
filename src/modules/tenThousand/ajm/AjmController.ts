import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajm")
export default class AjmController {
  @operation({
    summary: "Get Ajm",
  })
  @get()
  static getAjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajm",
  })
  @post("{id}")
  static createAjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
