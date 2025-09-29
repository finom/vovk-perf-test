import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kes")
export default class KeController {
  @operation({
    summary: "Get Kes",
  })
  @get()
  static getKes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ke",
  })
  @post("{id}")
  static createKe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
