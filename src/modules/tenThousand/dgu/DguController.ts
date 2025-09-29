import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgus")
export default class DguController {
  @operation({
    summary: "Get Dgus",
  })
  @get()
  static getDgus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgu",
  })
  @post("{id}")
  static createDgu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
