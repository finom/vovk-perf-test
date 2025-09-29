import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwhs")
export default class IwhController {
  @operation({
    summary: "Get Iwhs",
  })
  @get()
  static getIwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwh",
  })
  @post("{id}")
  static createIwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
