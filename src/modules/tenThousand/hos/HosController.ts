import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hos")
export default class HosController {
  @operation({
    summary: "Get Hos",
  })
  @get()
  static getHos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hos",
  })
  @post("{id}")
  static createHos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
