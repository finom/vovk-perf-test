import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djcs")
export default class DjcController {
  @operation({
    summary: "Get Djcs",
  })
  @get()
  static getDjcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djc",
  })
  @post("{id}")
  static createDjc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
