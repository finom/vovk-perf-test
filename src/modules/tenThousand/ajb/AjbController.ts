import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajb")
export default class AjbController {
  @operation({
    summary: "Get Ajb",
  })
  @get()
  static getAjb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajb",
  })
  @post("{id}")
  static createAjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
