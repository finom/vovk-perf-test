import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khqs")
export default class KhqController {
  @operation({
    summary: "Get Khqs",
  })
  @get()
  static getKhqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khq",
  })
  @post("{id}")
  static createKhq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
