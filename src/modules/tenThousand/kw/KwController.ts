import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kws")
export default class KwController {
  @operation({
    summary: "Get Kws",
  })
  @get()
  static getKws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kw",
  })
  @post("{id}")
  static createKw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
