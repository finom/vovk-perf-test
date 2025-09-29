import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzqs")
export default class KzqController {
  @operation({
    summary: "Get Kzqs",
  })
  @get()
  static getKzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzq",
  })
  @post("{id}")
  static createKzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
