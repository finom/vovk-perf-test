import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dzis")
export default class DziController {
  @operation({
    summary: "Get Dzis",
  })
  @get()
  static getDzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dzi",
  })
  @post("{id}")
  static createDzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
