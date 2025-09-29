import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mahs")
export default class MahController {
  @operation({
    summary: "Get Mahs",
  })
  @get()
  static getMahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mah",
  })
  @post("{id}")
  static createMah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
