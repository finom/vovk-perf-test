import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adts")
export default class AdtController {
  @operation({
    summary: "Get Adts",
  })
  @get()
  static getAdts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adt",
  })
  @post("{id}")
  static createAdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
