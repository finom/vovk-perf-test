import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khus")
export default class KhuController {
  @operation({
    summary: "Get Khus",
  })
  @get()
  static getKhus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khu",
  })
  @post("{id}")
  static createKhu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
