import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mixes")
export default class MixController {
  @operation({
    summary: "Get Mixes",
  })
  @get()
  static getMixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mix",
  })
  @post("{id}")
  static createMix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
