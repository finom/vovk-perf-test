import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eors")
export default class EorController {
  @operation({
    summary: "Get Eors",
  })
  @get()
  static getEors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eor",
  })
  @post("{id}")
  static createEor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
