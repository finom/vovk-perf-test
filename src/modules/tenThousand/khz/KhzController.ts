import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khzs")
export default class KhzController {
  @operation({
    summary: "Get Khzs",
  })
  @get()
  static getKhzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khz",
  })
  @post("{id}")
  static createKhz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
