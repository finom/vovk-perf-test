import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bks")
export default class BksController {
  @operation({
    summary: "Get Bks",
  })
  @get()
  static getBks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bks",
  })
  @post("{id}")
  static createBks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
