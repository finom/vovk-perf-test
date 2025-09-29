import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khws")
export default class KhwController {
  @operation({
    summary: "Get Khws",
  })
  @get()
  static getKhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khw",
  })
  @post("{id}")
  static createKhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
