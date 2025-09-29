import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhos")
export default class HhoController {
  @operation({
    summary: "Get Hhos",
  })
  @get()
  static getHhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hho",
  })
  @post("{id}")
  static createHho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
