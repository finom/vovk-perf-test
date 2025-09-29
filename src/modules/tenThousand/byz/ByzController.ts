import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byzs")
export default class ByzController {
  @operation({
    summary: "Get Byzs",
  })
  @get()
  static getByzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byz",
  })
  @post("{id}")
  static createByz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
