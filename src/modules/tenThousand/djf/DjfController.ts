import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djf")
export default class DjfController {
  @operation({
    summary: "Get Djf",
  })
  @get()
  static getDjf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djf",
  })
  @post("{id}")
  static createDjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
