import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sis")
export default class SiController {
  @operation({
    summary: "Get Sis",
  })
  @get()
  static getSis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Si",
  })
  @post("{id}")
  static createSi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
