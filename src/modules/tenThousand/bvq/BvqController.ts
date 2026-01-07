import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvq")
export default class BvqController {
  @operation({
    summary: "Get Bvq",
  })
  @get()
  static getBvq = procedure({
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
