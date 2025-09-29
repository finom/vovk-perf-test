import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqs")
export default class KqController {
  @operation({
    summary: "Get Kqs",
  })
  @get()
  static getKqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kq",
  })
  @post("{id}")
  static createKq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
