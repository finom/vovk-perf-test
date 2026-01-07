import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djt")
export default class DjtController {
  @operation({
    summary: "Get Djt",
  })
  @get()
  static getDjt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djt",
  })
  @post("{id}")
  static createDjt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
