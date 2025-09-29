import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bigs")
export default class BigController {
  @operation({
    summary: "Get Bigs",
  })
  @get()
  static getBigs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Big",
  })
  @post("{id}")
  static createBig = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
