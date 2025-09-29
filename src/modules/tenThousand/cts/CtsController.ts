import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cts")
export default class CtsController {
  @operation({
    summary: "Get Cts",
  })
  @get()
  static getCts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cts",
  })
  @post("{id}")
  static createCts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
