import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajn")
export default class AjnController {
  @operation({
    summary: "Get Ajn",
  })
  @get()
  static getAjn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajn",
  })
  @post("{id}")
  static createAjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
