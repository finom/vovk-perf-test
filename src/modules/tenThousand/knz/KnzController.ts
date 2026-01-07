import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knz")
export default class KnzController {
  @operation({
    summary: "Get Knz",
  })
  @get()
  static getKnz = procedure({
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
