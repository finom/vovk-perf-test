import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmus")
export default class KmuController {
  @operation({
    summary: "Get Kmus",
  })
  @get()
  static getKmus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmu",
  })
  @post("{id}")
  static createKmu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
