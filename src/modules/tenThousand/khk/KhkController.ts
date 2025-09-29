import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khks")
export default class KhkController {
  @operation({
    summary: "Get Khks",
  })
  @get()
  static getKhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khk",
  })
  @post("{id}")
  static createKhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
