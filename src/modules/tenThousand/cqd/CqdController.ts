import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqds")
export default class CqdController {
  @operation({
    summary: "Get Cqds",
  })
  @get()
  static getCqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqd",
  })
  @post("{id}")
  static createCqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
