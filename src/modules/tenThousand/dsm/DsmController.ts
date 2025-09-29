import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsms")
export default class DsmController {
  @operation({
    summary: "Get Dsms",
  })
  @get()
  static getDsms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsm",
  })
  @post("{id}")
  static createDsm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
