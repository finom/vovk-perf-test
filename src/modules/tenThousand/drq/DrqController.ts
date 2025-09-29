import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drqs")
export default class DrqController {
  @operation({
    summary: "Get Drqs",
  })
  @get()
  static getDrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drq",
  })
  @post("{id}")
  static createDrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
