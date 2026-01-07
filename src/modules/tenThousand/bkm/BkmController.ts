import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkm")
export default class BkmController {
  @operation({
    summary: "Get Bkm",
  })
  @get()
  static getBkm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkm",
  })
  @post("{id}")
  static createBkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
