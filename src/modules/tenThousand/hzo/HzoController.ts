import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzos")
export default class HzoController {
  @operation({
    summary: "Get Hzos",
  })
  @get()
  static getHzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzo",
  })
  @post("{id}")
  static createHzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
