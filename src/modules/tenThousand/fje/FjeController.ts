import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fjes")
export default class FjeController {
  @operation({
    summary: "Get Fjes",
  })
  @get()
  static getFjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fje",
  })
  @post("{id}")
  static createFje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
