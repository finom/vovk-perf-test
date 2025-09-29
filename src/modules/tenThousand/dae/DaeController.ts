import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("daes")
export default class DaeController {
  @operation({
    summary: "Get Daes",
  })
  @get()
  static getDaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dae",
  })
  @post("{id}")
  static createDae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
