import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyms")
export default class CymController {
  @operation({
    summary: "Get Cyms",
  })
  @get()
  static getCyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cym",
  })
  @post("{id}")
  static createCym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
