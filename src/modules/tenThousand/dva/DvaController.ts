import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvas")
export default class DvaController {
  @operation({
    summary: "Get Dvas",
  })
  @get()
  static getDvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dva",
  })
  @post("{id}")
  static createDva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
