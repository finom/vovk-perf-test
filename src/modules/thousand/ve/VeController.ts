import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ves")
export default class VeController {
  @operation({
    summary: "Get Ves",
  })
  @get()
  static getVes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ve",
  })
  @post("{id}")
  static createVe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
