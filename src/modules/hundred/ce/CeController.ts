import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ces")
export default class CeController {
  @operation({
    summary: "Get Ces",
  })
  @get()
  static getCes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ce",
  })
  @post("{id}")
  static createCe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
