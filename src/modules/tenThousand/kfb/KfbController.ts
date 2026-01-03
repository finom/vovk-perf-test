import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfbs")
export default class KfbController {
  @operation({
    summary: "Get Kfbs",
  })
  @get()
  static getKfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfb",
  })
  @post("{id}")
  static createKfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
