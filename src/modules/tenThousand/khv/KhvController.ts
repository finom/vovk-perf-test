import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khvs")
export default class KhvController {
  @operation({
    summary: "Get Khvs",
  })
  @get()
  static getKhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khv",
  })
  @post("{id}")
  static createKhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
