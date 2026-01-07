import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnz")
export default class DnzController {
  @operation({
    summary: "Get Dnz",
  })
  @get()
  static getDnz = procedure({
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
