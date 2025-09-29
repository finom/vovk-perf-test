import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alves")
export default class AlfController {
  @operation({
    summary: "Get Alves",
  })
  @get()
  static getAlves = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alf",
  })
  @post("{id}")
  static createAlf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
