import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbzs")
export default class MbzController {
  @operation({
    summary: "Get Mbzs",
  })
  @get()
  static getMbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbz",
  })
  @post("{id}")
  static createMbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
