import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhi")
export default class BhiController {
  @operation({
    summary: "Get Bhi",
  })
  @get()
  static getBhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhi",
  })
  @post("{id}")
  static createBhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
