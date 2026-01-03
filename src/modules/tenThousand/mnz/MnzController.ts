import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnzs")
export default class MnzController {
  @operation({
    summary: "Get Mnzs",
  })
  @get()
  static getMnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnz",
  })
  @post("{id}")
  static createMnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
