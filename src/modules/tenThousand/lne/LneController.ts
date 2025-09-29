import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnes")
export default class LneController {
  @operation({
    summary: "Get Lnes",
  })
  @get()
  static getLnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lne",
  })
  @post("{id}")
  static createLne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
