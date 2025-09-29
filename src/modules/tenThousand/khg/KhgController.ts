import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khgs")
export default class KhgController {
  @operation({
    summary: "Get Khgs",
  })
  @get()
  static getKhgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khg",
  })
  @post("{id}")
  static createKhg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
