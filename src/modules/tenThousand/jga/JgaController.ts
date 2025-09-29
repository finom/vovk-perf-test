import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgas")
export default class JgaController {
  @operation({
    summary: "Get Jgas",
  })
  @get()
  static getJgas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jga",
  })
  @post("{id}")
  static createJga = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
