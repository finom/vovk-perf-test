import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djes")
export default class DjeController {
  @operation({
    summary: "Get Djes",
  })
  @get()
  static getDjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dje",
  })
  @post("{id}")
  static createDje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
