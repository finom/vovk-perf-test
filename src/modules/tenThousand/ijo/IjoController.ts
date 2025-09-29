import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijos")
export default class IjoController {
  @operation({
    summary: "Get Ijos",
  })
  @get()
  static getIjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijo",
  })
  @post("{id}")
  static createIjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
