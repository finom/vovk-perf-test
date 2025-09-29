import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krrs")
export default class KrrController {
  @operation({
    summary: "Get Krrs",
  })
  @get()
  static getKrrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krr",
  })
  @post("{id}")
  static createKrr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
