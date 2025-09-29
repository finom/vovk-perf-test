import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dos")
export default class DoController {
  @operation({
    summary: "Get Dos",
  })
  @get()
  static getDos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Do",
  })
  @post("{id}")
  static createDo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
