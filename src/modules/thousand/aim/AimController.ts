import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aims")
export default class AimController {
  @operation({
    summary: "Get Aims",
  })
  @get()
  static getAims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aim",
  })
  @post("{id}")
  static createAim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
