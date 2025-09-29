import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ejks")
export default class EjkController {
  @operation({
    summary: "Get Ejks",
  })
  @get()
  static getEjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ejk",
  })
  @post("{id}")
  static createEjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
