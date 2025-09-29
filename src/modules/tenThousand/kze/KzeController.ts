import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzes")
export default class KzeController {
  @operation({
    summary: "Get Kzes",
  })
  @get()
  static getKzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kze",
  })
  @post("{id}")
  static createKze = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
