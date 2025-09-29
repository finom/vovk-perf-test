import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eufs")
export default class EufController {
  @operation({
    summary: "Get Eufs",
  })
  @get()
  static getEufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euf",
  })
  @post("{id}")
  static createEuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
