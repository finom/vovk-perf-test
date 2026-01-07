import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euw")
export default class EuwController {
  @operation({
    summary: "Get Euw",
  })
  @get()
  static getEuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euw",
  })
  @post("{id}")
  static createEuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
