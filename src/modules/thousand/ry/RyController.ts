import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ries")
export default class RyController {
  @operation({
    summary: "Get Ries",
  })
  @get()
  static getRies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ry",
  })
  @post("{id}")
  static createRy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
