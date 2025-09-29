import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkhs")
export default class DkhController {
  @operation({
    summary: "Get Dkhs",
  })
  @get()
  static getDkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkh",
  })
  @post("{id}")
  static createDkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
