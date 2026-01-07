import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmm")
export default class KmmController {
  @operation({
    summary: "Get Kmm",
  })
  @get()
  static getKmm = procedure({
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
