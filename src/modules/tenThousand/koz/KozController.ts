import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kozs")
export default class KozController {
  @operation({
    summary: "Get Kozs",
  })
  @get()
  static getKozs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koz",
  })
  @post("{id}")
  static createKoz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
