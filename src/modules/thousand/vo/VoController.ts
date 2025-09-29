import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vos")
export default class VoController {
  @operation({
    summary: "Get Vos",
  })
  @get()
  static getVos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vo",
  })
  @post("{id}")
  static createVo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
