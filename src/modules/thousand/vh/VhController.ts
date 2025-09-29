import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vhs")
export default class VhController {
  @operation({
    summary: "Get Vhs",
  })
  @get()
  static getVhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vh",
  })
  @post("{id}")
  static createVh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
