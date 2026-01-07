import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzl")
export default class BzlController {
  @operation({
    summary: "Get Bzl",
  })
  @get()
  static getBzl = procedure({
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
