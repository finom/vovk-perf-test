import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajx")
export default class AjxController {
  @operation({
    summary: "Get Ajx",
  })
  @get()
  static getAjx = procedure({
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
