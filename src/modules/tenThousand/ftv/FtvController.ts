import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftvs")
export default class FtvController {
  @operation({
    summary: "Get Ftvs",
  })
  @get()
  static getFtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ftv",
  })
  @post("{id}")
  static createFtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
