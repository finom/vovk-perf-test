import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjes")
export default class HjeController {
  @operation({
    summary: "Get Hjes",
  })
  @get()
  static getHjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hje",
  })
  @post("{id}")
  static createHje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
