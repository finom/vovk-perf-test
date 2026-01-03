import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfvs")
export default class KfvController {
  @operation({
    summary: "Get Kfvs",
  })
  @get()
  static getKfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfv",
  })
  @post("{id}")
  static createKfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
