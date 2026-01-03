import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfks")
export default class KfkController {
  @operation({
    summary: "Get Kfks",
  })
  @get()
  static getKfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfk",
  })
  @post("{id}")
  static createKfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
