import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djs")
export default class DjsController {
  @operation({
    summary: "Get Djs",
  })
  @get()
  static getDjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djs",
  })
  @post("{id}")
  static createDjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
