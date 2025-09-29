import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drbs")
export default class DrbController {
  @operation({
    summary: "Get Drbs",
  })
  @get()
  static getDrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drb",
  })
  @post("{id}")
  static createDrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
