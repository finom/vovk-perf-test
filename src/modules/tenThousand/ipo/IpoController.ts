import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipos")
export default class IpoController {
  @operation({
    summary: "Get Ipos",
  })
  @get()
  static getIpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipo",
  })
  @post("{id}")
  static createIpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
