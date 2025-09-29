import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mmis")
export default class MmiController {
  @operation({
    summary: "Get Mmis",
  })
  @get()
  static getMmis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mmi",
  })
  @post("{id}")
  static createMmi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
