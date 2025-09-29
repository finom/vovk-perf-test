import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvrs")
export default class KvrController {
  @operation({
    summary: "Get Kvrs",
  })
  @get()
  static getKvrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvr",
  })
  @post("{id}")
  static createKvr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
