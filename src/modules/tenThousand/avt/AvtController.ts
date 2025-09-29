import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avts")
export default class AvtController {
  @operation({
    summary: "Get Avts",
  })
  @get()
  static getAvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avt",
  })
  @post("{id}")
  static createAvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
