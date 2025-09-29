import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khms")
export default class KhmController {
  @operation({
    summary: "Get Khms",
  })
  @get()
  static getKhms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khm",
  })
  @post("{id}")
  static createKhm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
