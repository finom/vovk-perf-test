import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("durs")
export default class DurController {
  @operation({
    summary: "Get Durs",
  })
  @get()
  static getDurs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dur",
  })
  @post("{id}")
  static createDur = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
