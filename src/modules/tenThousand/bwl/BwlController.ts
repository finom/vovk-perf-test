import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwl")
export default class BwlController {
  @operation({
    summary: "Get Bwl",
  })
  @get()
  static getBwl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwl",
  })
  @post("{id}")
  static createBwl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
