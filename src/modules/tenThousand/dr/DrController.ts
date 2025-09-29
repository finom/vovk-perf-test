import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drs")
export default class DrController {
  @operation({
    summary: "Get Drs",
  })
  @get()
  static getDrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dr",
  })
  @post("{id}")
  static createDr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
