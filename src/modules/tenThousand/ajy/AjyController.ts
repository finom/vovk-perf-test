import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajies")
export default class AjyController {
  @operation({
    summary: "Get Ajies",
  })
  @get()
  static getAjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajy",
  })
  @post("{id}")
  static createAjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
