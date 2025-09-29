import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dghs")
export default class DghController {
  @operation({
    summary: "Get Dghs",
  })
  @get()
  static getDghs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgh",
  })
  @post("{id}")
  static createDgh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
