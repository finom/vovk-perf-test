import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqzs")
export default class NqzController {
  @operation({
    summary: "Get Nqzs",
  })
  @get()
  static getNqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqz",
  })
  @post("{id}")
  static createNqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
