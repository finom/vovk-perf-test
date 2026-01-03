import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyks")
export default class DykController {
  @operation({
    summary: "Get Dyks",
  })
  @get()
  static getDyks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyk",
  })
  @post("{id}")
  static createDyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
