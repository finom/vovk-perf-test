import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajd")
export default class AjdController {
  @operation({
    summary: "Get Ajd",
  })
  @get()
  static getAjd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajd",
  })
  @post("{id}")
  static createAjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
