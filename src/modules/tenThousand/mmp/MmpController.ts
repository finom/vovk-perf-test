import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmps")
export default class MmpController {
  @operation({
    summary: "Get Mmps",
  })
  @get()
  static getMmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmp",
  })
  @post("{id}")
  static createMmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
