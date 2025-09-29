import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hhas")
export default class HhaController {
  @operation({
    summary: "Get Hhas",
  })
  @get()
  static getHhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hha",
  })
  @post("{id}")
  static createHha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
