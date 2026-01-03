import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ks")
export default class KsController {
  @operation({
    summary: "Get Ks",
  })
  @get()
  static getKs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ks",
  })
  @post("{id}")
  static createKs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
