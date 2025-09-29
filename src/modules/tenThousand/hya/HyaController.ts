import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyas")
export default class HyaController {
  @operation({
    summary: "Get Hyas",
  })
  @get()
  static getHyas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hya",
  })
  @post("{id}")
  static createHya = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
