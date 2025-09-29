import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izls")
export default class IzlController {
  @operation({
    summary: "Get Izls",
  })
  @get()
  static getIzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izl",
  })
  @post("{id}")
  static createIzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
