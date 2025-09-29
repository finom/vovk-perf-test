import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dams")
export default class DamController {
  @operation({
    summary: "Get Dams",
  })
  @get()
  static getDams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dam",
  })
  @post("{id}")
  static createDam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
