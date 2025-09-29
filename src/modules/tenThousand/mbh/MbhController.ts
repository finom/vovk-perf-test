import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbhs")
export default class MbhController {
  @operation({
    summary: "Get Mbhs",
  })
  @get()
  static getMbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbh",
  })
  @post("{id}")
  static createMbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
