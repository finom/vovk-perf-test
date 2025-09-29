import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dfjs")
export default class DfjController {
  @operation({
    summary: "Get Dfjs",
  })
  @get()
  static getDfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dfj",
  })
  @post("{id}")
  static createDfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
