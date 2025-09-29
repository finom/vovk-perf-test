import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drhs")
export default class DrhController {
  @operation({
    summary: "Get Drhs",
  })
  @get()
  static getDrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drh",
  })
  @post("{id}")
  static createDrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
