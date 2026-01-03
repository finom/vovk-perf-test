import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idbs")
export default class IdbController {
  @operation({
    summary: "Get Idbs",
  })
  @get()
  static getIdbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idb",
  })
  @post("{id}")
  static createIdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
