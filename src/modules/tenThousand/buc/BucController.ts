import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bucs")
export default class BucController {
  @operation({
    summary: "Get Bucs",
  })
  @get()
  static getBucs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buc",
  })
  @post("{id}")
  static createBuc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
