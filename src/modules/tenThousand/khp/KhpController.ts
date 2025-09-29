import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khps")
export default class KhpController {
  @operation({
    summary: "Get Khps",
  })
  @get()
  static getKhps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khp",
  })
  @post("{id}")
  static createKhp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
