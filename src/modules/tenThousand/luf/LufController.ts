import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lufs")
export default class LufController {
  @operation({
    summary: "Get Lufs",
  })
  @get()
  static getLufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luf",
  })
  @post("{id}")
  static createLuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
