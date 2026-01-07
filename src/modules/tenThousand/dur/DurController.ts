import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dur")
export default class DurController {
  @operation({
    summary: "Get Dur",
  })
  @get()
  static getDur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dur",
  })
  @post("{id}")
  static createDur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
