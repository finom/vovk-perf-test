import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbus")
export default class HbuController {
  @operation({
    summary: "Get Hbus",
  })
  @get()
  static getHbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbu",
  })
  @post("{id}")
  static createHbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
