import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvj")
export default class BvjController {
  @operation({
    summary: "Get Bvj",
  })
  @get()
  static getBvj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvj",
  })
  @post("{id}")
  static createBvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
