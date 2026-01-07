import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyj")
export default class CyjController {
  @operation({
    summary: "Get Cyj",
  })
  @get()
  static getCyj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyj",
  })
  @post("{id}")
  static createCyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
