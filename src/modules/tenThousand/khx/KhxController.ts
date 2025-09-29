import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khxes")
export default class KhxController {
  @operation({
    summary: "Get Khxes",
  })
  @get()
  static getKhxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khx",
  })
  @post("{id}")
  static createKhx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
