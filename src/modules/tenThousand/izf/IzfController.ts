import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izfs")
export default class IzfController {
  @operation({
    summary: "Get Izfs",
  })
  @get()
  static getIzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Izf",
  })
  @post("{id}")
  static createIzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
