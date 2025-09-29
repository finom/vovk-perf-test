import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjas")
export default class CjaController {
  @operation({
    summary: "Get Cjas",
  })
  @get()
  static getCjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cja",
  })
  @post("{id}")
  static createCja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
