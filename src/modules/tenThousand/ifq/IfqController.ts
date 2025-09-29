import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifqs")
export default class IfqController {
  @operation({
    summary: "Get Ifqs",
  })
  @get()
  static getIfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifq",
  })
  @post("{id}")
  static createIfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
