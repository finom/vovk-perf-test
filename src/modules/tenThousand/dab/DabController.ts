import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dab")
export default class DabController {
  @operation({
    summary: "Get Dab",
  })
  @get()
  static getDab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dab",
  })
  @post("{id}")
  static createDab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
