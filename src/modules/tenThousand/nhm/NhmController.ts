import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhms")
export default class NhmController {
  @operation({
    summary: "Get Nhms",
  })
  @get()
  static getNhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhm",
  })
  @post("{id}")
  static createNhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
