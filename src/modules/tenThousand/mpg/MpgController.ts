import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpgs")
export default class MpgController {
  @operation({
    summary: "Get Mpgs",
  })
  @get()
  static getMpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpg",
  })
  @post("{id}")
  static createMpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
