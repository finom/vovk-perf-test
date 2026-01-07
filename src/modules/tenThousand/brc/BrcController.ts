import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brc")
export default class BrcController {
  @operation({
    summary: "Get Brc",
  })
  @get()
  static getBrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brc",
  })
  @post("{id}")
  static createBrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
