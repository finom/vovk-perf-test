import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebl")
export default class EblController {
  @operation({
    summary: "Get Ebl",
  })
  @get()
  static getEbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebl",
  })
  @post("{id}")
  static createEbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
