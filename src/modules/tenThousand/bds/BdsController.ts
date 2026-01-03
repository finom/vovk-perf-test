import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bds")
export default class BdsController {
  @operation({
    summary: "Get Bds",
  })
  @get()
  static getBds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bds",
  })
  @post("{id}")
  static createBds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
