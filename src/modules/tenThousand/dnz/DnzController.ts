import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnzs")
export default class DnzController {
  @operation({
    summary: "Get Dnzs",
  })
  @get()
  static getDnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnz",
  })
  @post("{id}")
  static createDnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
