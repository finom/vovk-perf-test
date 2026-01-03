import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkzs")
export default class NkzController {
  @operation({
    summary: "Get Nkzs",
  })
  @get()
  static getNkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkz",
  })
  @post("{id}")
  static createNkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
