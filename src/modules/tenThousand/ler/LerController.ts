import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lers")
export default class LerController {
  @operation({
    summary: "Get Lers",
  })
  @get()
  static getLers = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ler",
  })
  @post("{id}")
  static createLer = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
