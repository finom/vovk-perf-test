import { procedure, prefix, get, post, operation } from "vovk";

@prefix("durs")
export default class DurController {
  @operation({
    summary: "Get Durs",
  })
  @get()
  static getDurs = procedure({
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
