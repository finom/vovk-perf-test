import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkms")
export default class KkmController {
  @operation({
    summary: "Get Kkms",
  })
  @get()
  static getKkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkm",
  })
  @post("{id}")
  static createKkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
