import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mix")
export default class MixController {
  @operation({
    summary: "Get Mix",
  })
  @get()
  static getMix = procedure({
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
