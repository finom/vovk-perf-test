import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djus")
export default class DjuController {
  @operation({
    summary: "Get Djus",
  })
  @get()
  static getDjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dju",
  })
  @post("{id}")
  static createDju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
