import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsqs")
export default class FsqController {
  @operation({
    summary: "Get Fsqs",
  })
  @get()
  static getFsqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsq",
  })
  @post("{id}")
  static createFsq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
