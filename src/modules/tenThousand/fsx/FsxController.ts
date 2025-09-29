import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsxes")
export default class FsxController {
  @operation({
    summary: "Get Fsxes",
  })
  @get()
  static getFsxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsx",
  })
  @post("{id}")
  static createFsx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
