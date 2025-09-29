import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncjs")
export default class NcjController {
  @operation({
    summary: "Get Ncjs",
  })
  @get()
  static getNcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncj",
  })
  @post("{id}")
  static createNcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
