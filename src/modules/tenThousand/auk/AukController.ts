import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auks")
export default class AukController {
  @operation({
    summary: "Get Auks",
  })
  @get()
  static getAuks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auk",
  })
  @post("{id}")
  static createAuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
