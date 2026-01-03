import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvcs")
export default class BvcController {
  @operation({
    summary: "Get Bvcs",
  })
  @get()
  static getBvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bvc",
  })
  @post("{id}")
  static createBvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
