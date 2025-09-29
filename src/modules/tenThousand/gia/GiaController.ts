import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gias")
export default class GiaController {
  @operation({
    summary: "Get Gias",
  })
  @get()
  static getGias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gia",
  })
  @post("{id}")
  static createGia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
