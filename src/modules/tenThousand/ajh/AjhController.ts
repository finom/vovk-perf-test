import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajh")
export default class AjhController {
  @operation({
    summary: "Get Ajh",
  })
  @get()
  static getAjh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajh",
  })
  @post("{id}")
  static createAjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
