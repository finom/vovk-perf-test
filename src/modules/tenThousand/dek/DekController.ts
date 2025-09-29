import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deks")
export default class DekController {
  @operation({
    summary: "Get Deks",
  })
  @get()
  static getDeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dek",
  })
  @post("{id}")
  static createDek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
