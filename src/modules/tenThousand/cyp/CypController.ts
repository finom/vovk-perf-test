import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyp")
export default class CypController {
  @operation({
    summary: "Get Cyp",
  })
  @get()
  static getCyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyp",
  })
  @post("{id}")
  static createCyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
