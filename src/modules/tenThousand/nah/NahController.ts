import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nahs")
export default class NahController {
  @operation({
    summary: "Get Nahs",
  })
  @get()
  static getNahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nah",
  })
  @post("{id}")
  static createNah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
