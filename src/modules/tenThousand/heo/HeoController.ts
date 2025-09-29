import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("heos")
export default class HeoController {
  @operation({
    summary: "Get Heos",
  })
  @get()
  static getHeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Heo",
  })
  @post("{id}")
  static createHeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
