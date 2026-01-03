import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kws")
export default class KwsController {
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
    summary: "Create Kws",
  })
  @post("{id}")
  static createKws = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
