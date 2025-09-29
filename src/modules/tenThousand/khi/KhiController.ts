import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khis")
export default class KhiController {
  @operation({
    summary: "Get Khis",
  })
  @get()
  static getKhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khi",
  })
  @post("{id}")
  static createKhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
