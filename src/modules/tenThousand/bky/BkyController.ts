import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bkies")
export default class BkyController {
  @operation({
    summary: "Get Bkies",
  })
  @get()
  static getBkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bky",
  })
  @post("{id}")
  static createBky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
