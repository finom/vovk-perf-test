import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mirs")
export default class MirController {
  @operation({
    summary: "Get Mirs",
  })
  @get()
  static getMirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mir",
  })
  @post("{id}")
  static createMir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
