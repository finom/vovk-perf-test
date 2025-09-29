import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haas")
export default class HaaController {
  @operation({
    summary: "Get Haas",
  })
  @get()
  static getHaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Haa",
  })
  @post("{id}")
  static createHaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
