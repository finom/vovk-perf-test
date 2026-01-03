import { procedure, prefix, get, post, operation } from "vovk";

@prefix("babs")
export default class BabController {
  @operation({
    summary: "Get Babs",
  })
  @get()
  static getBabs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bab",
  })
  @post("{id}")
  static createBab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
