import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsm")
export default class BsmController {
  @operation({
    summary: "Get Bsm",
  })
  @get()
  static getBsm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsm",
  })
  @post("{id}")
  static createBsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
