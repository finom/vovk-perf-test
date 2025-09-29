import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vis")
export default class ViController {
  @operation({
    summary: "Get Vis",
  })
  @get()
  static getVis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vi",
  })
  @post("{id}")
  static createVi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
