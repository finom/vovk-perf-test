import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buis")
export default class BuiController {
  @operation({
    summary: "Get Buis",
  })
  @get()
  static getBuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bui",
  })
  @post("{id}")
  static createBui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
