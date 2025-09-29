import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fsjs")
export default class FsjController {
  @operation({
    summary: "Get Fsjs",
  })
  @get()
  static getFsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fsj",
  })
  @post("{id}")
  static createFsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
