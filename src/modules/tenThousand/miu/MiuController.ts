import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mius")
export default class MiuController {
  @operation({
    summary: "Get Mius",
  })
  @get()
  static getMius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Miu",
  })
  @post("{id}")
  static createMiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
