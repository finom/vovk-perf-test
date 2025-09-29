import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khbs")
export default class KhbController {
  @operation({
    summary: "Get Khbs",
  })
  @get()
  static getKhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khb",
  })
  @post("{id}")
  static createKhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
