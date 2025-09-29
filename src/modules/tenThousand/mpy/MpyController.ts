import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpies")
export default class MpyController {
  @operation({
    summary: "Get Mpies",
  })
  @get()
  static getMpies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpy",
  })
  @post("{id}")
  static createMpy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
