import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyas")
export default class CyaController {
  @operation({
    summary: "Get Cyas",
  })
  @get()
  static getCyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cya",
  })
  @post("{id}")
  static createCya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
