import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzls")
export default class BzlController {
  @operation({
    summary: "Get Bzls",
  })
  @get()
  static getBzls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bzl",
  })
  @post("{id}")
  static createBzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
