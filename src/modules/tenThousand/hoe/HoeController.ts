import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hoes")
export default class HoeController {
  @operation({
    summary: "Get Hoes",
  })
  @get()
  static getHoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoe",
  })
  @post("{id}")
  static createHoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
