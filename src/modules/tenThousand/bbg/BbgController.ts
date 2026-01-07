import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbg")
export default class BbgController {
  @operation({
    summary: "Get Bbg",
  })
  @get()
  static getBbg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbg",
  })
  @post("{id}")
  static createBbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
