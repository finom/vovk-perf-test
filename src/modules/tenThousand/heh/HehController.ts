import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hehs")
export default class HehController {
  @operation({
    summary: "Get Hehs",
  })
  @get()
  static getHehs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Heh",
  })
  @post("{id}")
  static createHeh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
