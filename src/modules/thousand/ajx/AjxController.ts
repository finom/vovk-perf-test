import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajxes")
export default class AjxController {
  @operation({
    summary: "Get Ajxes",
  })
  @get()
  static getAjxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ajx",
  })
  @post("{id}")
  static createAjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
