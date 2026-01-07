import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvp")
export default class BvpController {
  @operation({
    summary: "Get Bvp",
  })
  @get()
  static getBvp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvp",
  })
  @post("{id}")
  static createBvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
