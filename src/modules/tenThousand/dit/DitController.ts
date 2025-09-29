import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dits")
export default class DitController {
  @operation({
    summary: "Get Dits",
  })
  @get()
  static getDits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dit",
  })
  @post("{id}")
  static createDit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
