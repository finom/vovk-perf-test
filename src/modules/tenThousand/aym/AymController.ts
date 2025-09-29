import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayms")
export default class AymController {
  @operation({
    summary: "Get Ayms",
  })
  @get()
  static getAyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aym",
  })
  @post("{id}")
  static createAym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
