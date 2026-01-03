import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajms")
export default class AjmController {
  @operation({
    summary: "Get Ajms",
  })
  @get()
  static getAjms = procedure({
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
