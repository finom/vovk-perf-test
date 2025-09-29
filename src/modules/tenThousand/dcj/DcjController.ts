import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcjs")
export default class DcjController {
  @operation({
    summary: "Get Dcjs",
  })
  @get()
  static getDcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcj",
  })
  @post("{id}")
  static createDcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
