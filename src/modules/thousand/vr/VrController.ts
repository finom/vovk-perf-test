import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vrs")
export default class VrController {
  @operation({
    summary: "Get Vrs",
  })
  @get()
  static getVrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vr",
  })
  @post("{id}")
  static createVr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
