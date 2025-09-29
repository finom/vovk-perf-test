import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grqs")
export default class GrqController {
  @operation({
    summary: "Get Grqs",
  })
  @get()
  static getGrqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grq",
  })
  @post("{id}")
  static createGrq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
