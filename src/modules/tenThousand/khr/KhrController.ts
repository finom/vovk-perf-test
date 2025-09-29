import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khrs")
export default class KhrController {
  @operation({
    summary: "Get Khrs",
  })
  @get()
  static getKhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khr",
  })
  @post("{id}")
  static createKhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
