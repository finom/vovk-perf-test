import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajr")
export default class AjrController {
  @operation({
    summary: "Get Ajr",
  })
  @get()
  static getAjr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajr",
  })
  @post("{id}")
  static createAjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
