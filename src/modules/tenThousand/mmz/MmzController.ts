import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmzs")
export default class MmzController {
  @operation({
    summary: "Get Mmzs",
  })
  @get()
  static getMmzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmz",
  })
  @post("{id}")
  static createMmz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
