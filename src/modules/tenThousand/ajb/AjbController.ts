import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajbs")
export default class AjbController {
  @operation({
    summary: "Get Ajbs",
  })
  @get()
  static getAjbs = procedure({
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
