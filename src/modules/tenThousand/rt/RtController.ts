import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("rts")
export default class RtController {
  @operation({
    summary: "Get Rts",
  })
  @get()
  static getRts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Rt",
  })
  @post("{id}")
  static createRt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
