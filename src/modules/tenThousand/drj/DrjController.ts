import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drjs")
export default class DrjController {
  @operation({
    summary: "Get Drjs",
  })
  @get()
  static getDrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drj",
  })
  @post("{id}")
  static createDrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
