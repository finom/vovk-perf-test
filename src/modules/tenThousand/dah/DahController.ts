import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dahs")
export default class DahController {
  @operation({
    summary: "Get Dahs",
  })
  @get()
  static getDahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dah",
  })
  @post("{id}")
  static createDah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
