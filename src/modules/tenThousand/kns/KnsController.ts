import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kns")
export default class KnsController {
  @operation({
    summary: "Get Kns",
  })
  @get()
  static getKns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kns",
  })
  @post("{id}")
  static createKns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
