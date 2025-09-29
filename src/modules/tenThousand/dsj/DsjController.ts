import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsjs")
export default class DsjController {
  @operation({
    summary: "Get Dsjs",
  })
  @get()
  static getDsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsj",
  })
  @post("{id}")
  static createDsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
