import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtqs")
export default class DtqController {
  @operation({
    summary: "Get Dtqs",
  })
  @get()
  static getDtqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtq",
  })
  @post("{id}")
  static createDtq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
