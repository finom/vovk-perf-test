import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("haus")
export default class HauController {
  @operation({
    summary: "Get Haus",
  })
  @get()
  static getHaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hau",
  })
  @post("{id}")
  static createHau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
