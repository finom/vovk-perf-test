import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtjs")
export default class DtjController {
  @operation({
    summary: "Get Dtjs",
  })
  @get()
  static getDtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtj",
  })
  @post("{id}")
  static createDtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
