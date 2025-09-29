import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdos")
export default class HdoController {
  @operation({
    summary: "Get Hdos",
  })
  @get()
  static getHdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdo",
  })
  @post("{id}")
  static createHdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
