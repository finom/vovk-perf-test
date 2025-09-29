import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jes")
export default class JeController {
  @operation({
    summary: "Get Jes",
  })
  @get()
  static getJes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Je",
  })
  @post("{id}")
  static createJe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
