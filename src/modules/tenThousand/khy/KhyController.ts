import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khies")
export default class KhyController {
  @operation({
    summary: "Get Khies",
  })
  @get()
  static getKhies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Khy",
  })
  @post("{id}")
  static createKhy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
