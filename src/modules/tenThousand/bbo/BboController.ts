import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bbos")
export default class BboController {
  @operation({
    summary: "Get Bbos",
  })
  @get()
  static getBbos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bbo",
  })
  @post("{id}")
  static createBbo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
