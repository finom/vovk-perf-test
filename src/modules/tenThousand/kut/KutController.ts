import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuts")
export default class KutController {
  @operation({
    summary: "Get Kuts",
  })
  @get()
  static getKuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kut",
  })
  @post("{id}")
  static createKut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
