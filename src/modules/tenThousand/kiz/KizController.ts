import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kizs")
export default class KizController {
  @operation({
    summary: "Get Kizs",
  })
  @get()
  static getKizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiz",
  })
  @post("{id}")
  static createKiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
