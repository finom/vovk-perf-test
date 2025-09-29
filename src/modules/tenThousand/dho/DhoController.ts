import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dhos")
export default class DhoController {
  @operation({
    summary: "Get Dhos",
  })
  @get()
  static getDhos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dho",
  })
  @post("{id}")
  static createDho = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
