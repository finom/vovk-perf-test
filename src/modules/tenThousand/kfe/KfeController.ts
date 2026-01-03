import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfes")
export default class KfeController {
  @operation({
    summary: "Get Kfes",
  })
  @get()
  static getKfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfe",
  })
  @post("{id}")
  static createKfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
