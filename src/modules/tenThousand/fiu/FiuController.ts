import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fius")
export default class FiuController {
  @operation({
    summary: "Get Fius",
  })
  @get()
  static getFius = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fiu",
  })
  @post("{id}")
  static createFiu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
