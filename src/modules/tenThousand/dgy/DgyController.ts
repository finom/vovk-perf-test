import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgies")
export default class DgyController {
  @operation({
    summary: "Get Dgies",
  })
  @get()
  static getDgies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgy",
  })
  @post("{id}")
  static createDgy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
