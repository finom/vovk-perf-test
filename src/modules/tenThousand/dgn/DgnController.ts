import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgns")
export default class DgnController {
  @operation({
    summary: "Get Dgns",
  })
  @get()
  static getDgns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgn",
  })
  @post("{id}")
  static createDgn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
