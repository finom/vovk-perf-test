import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjes")
export default class JjeController {
  @operation({
    summary: "Get Jjes",
  })
  @get()
  static getJjes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jje",
  })
  @post("{id}")
  static createJje = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
