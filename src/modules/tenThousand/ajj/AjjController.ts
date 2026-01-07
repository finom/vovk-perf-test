import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajj")
export default class AjjController {
  @operation({
    summary: "Get Ajj",
  })
  @get()
  static getAjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajj",
  })
  @post("{id}")
  static createAjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
