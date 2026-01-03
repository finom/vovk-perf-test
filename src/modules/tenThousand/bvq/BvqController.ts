import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvqs")
export default class BvqController {
  @operation({
    summary: "Get Bvqs",
  })
  @get()
  static getBvqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvq",
  })
  @post("{id}")
  static createBvq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
