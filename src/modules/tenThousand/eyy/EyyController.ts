import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyys")
export default class EyyController {
  @operation({
    summary: "Get Eyys",
  })
  @get()
  static getEyys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyy",
  })
  @post("{id}")
  static createEyy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
