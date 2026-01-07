import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfv")
export default class KfvController {
  @operation({
    summary: "Get Kfv",
  })
  @get()
  static getKfv = procedure({
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
