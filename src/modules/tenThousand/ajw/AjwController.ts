import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajw")
export default class AjwController {
  @operation({
    summary: "Get Ajw",
  })
  @get()
  static getAjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajw",
  })
  @post("{id}")
  static createAjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
