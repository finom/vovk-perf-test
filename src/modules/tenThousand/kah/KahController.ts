import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kahs")
export default class KahController {
  @operation({
    summary: "Get Kahs",
  })
  @get()
  static getKahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kah",
  })
  @post("{id}")
  static createKah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
