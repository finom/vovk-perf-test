import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmms")
export default class KmmController {
  @operation({
    summary: "Get Kmms",
  })
  @get()
  static getKmms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmm",
  })
  @post("{id}")
  static createKmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
