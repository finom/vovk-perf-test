import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnzs")
export default class HnzController {
  @operation({
    summary: "Get Hnzs",
  })
  @get()
  static getHnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnz",
  })
  @post("{id}")
  static createHnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
