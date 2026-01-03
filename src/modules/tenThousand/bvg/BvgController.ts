import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvgs")
export default class BvgController {
  @operation({
    summary: "Get Bvgs",
  })
  @get()
  static getBvgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvg",
  })
  @post("{id}")
  static createBvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
