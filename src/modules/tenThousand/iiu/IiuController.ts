import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iius")
export default class IiuController {
  @operation({
    summary: "Get Iius",
  })
  @get()
  static getIius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iiu",
  })
  @post("{id}")
  static createIiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
