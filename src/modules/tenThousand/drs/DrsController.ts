import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drs")
export default class DrsController {
  @operation({
    summary: "Get Drs",
  })
  @get()
  static getDrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drs",
  })
  @post("{id}")
  static createDrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
