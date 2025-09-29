import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmrs")
export default class DmrController {
  @operation({
    summary: "Get Dmrs",
  })
  @get()
  static getDmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmr",
  })
  @post("{id}")
  static createDmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
