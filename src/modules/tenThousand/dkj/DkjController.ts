import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkjs")
export default class DkjController {
  @operation({
    summary: "Get Dkjs",
  })
  @get()
  static getDkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkj",
  })
  @post("{id}")
  static createDkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
