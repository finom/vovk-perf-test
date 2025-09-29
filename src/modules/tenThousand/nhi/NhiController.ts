import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nhis")
export default class NhiController {
  @operation({
    summary: "Get Nhis",
  })
  @get()
  static getNhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nhi",
  })
  @post("{id}")
  static createNhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
