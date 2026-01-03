import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyps")
export default class CypController {
  @operation({
    summary: "Get Cyps",
  })
  @get()
  static getCyps = procedure({
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
