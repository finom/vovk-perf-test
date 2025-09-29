import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyzs")
export default class FyzController {
  @operation({
    summary: "Get Fyzs",
  })
  @get()
  static getFyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyz",
  })
  @post("{id}")
  static createFyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
