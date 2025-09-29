import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgks")
export default class DgkController {
  @operation({
    summary: "Get Dgks",
  })
  @get()
  static getDgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgk",
  })
  @post("{id}")
  static createDgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
