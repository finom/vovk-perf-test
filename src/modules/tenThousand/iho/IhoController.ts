import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ihos")
export default class IhoController {
  @operation({
    summary: "Get Ihos",
  })
  @get()
  static getIhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iho",
  })
  @post("{id}")
  static createIho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
