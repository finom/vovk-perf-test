import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyjs")
export default class DyjController {
  @operation({
    summary: "Get Dyjs",
  })
  @get()
  static getDyjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyj",
  })
  @post("{id}")
  static createDyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
