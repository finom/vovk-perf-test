import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drrs")
export default class DrrController {
  @operation({
    summary: "Get Drrs",
  })
  @get()
  static getDrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drr",
  })
  @post("{id}")
  static createDrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
