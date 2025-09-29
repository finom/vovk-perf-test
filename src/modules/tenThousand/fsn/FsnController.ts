import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsns")
export default class FsnController {
  @operation({
    summary: "Get Fsns",
  })
  @get()
  static getFsns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsn",
  })
  @post("{id}")
  static createFsn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
