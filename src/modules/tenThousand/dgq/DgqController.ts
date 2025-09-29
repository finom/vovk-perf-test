import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgqs")
export default class DgqController {
  @operation({
    summary: "Get Dgqs",
  })
  @get()
  static getDgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgq",
  })
  @post("{id}")
  static createDgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
