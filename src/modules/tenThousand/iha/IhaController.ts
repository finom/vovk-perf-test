import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihas")
export default class IhaController {
  @operation({
    summary: "Get Ihas",
  })
  @get()
  static getIhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iha",
  })
  @post("{id}")
  static createIha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
