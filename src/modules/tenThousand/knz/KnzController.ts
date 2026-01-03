import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knzs")
export default class KnzController {
  @operation({
    summary: "Get Knzs",
  })
  @get()
  static getKnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knz",
  })
  @post("{id}")
  static createKnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
