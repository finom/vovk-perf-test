import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcks")
export default class LckController {
  @operation({
    summary: "Get Lcks",
  })
  @get()
  static getLcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lck",
  })
  @post("{id}")
  static createLck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
