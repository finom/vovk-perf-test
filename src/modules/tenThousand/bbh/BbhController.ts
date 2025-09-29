import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbhs")
export default class BbhController {
  @operation({
    summary: "Get Bbhs",
  })
  @get()
  static getBbhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbh",
  })
  @post("{id}")
  static createBbh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
