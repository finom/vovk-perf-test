import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmes")
export default class DmeController {
  @operation({
    summary: "Get Dmes",
  })
  @get()
  static getDmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dme",
  })
  @post("{id}")
  static createDme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
