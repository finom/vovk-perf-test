import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ceks")
export default class CekController {
  @operation({
    summary: "Get Ceks",
  })
  @get()
  static getCeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cek",
  })
  @post("{id}")
  static createCek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
