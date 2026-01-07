import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpb")
export default class LpbController {
  @operation({
    summary: "Get Lpb",
  })
  @get()
  static getLpb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpb",
  })
  @post("{id}")
  static createLpb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
