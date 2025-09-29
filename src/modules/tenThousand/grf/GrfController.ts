import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("grfs")
export default class GrfController {
  @operation({
    summary: "Get Grfs",
  })
  @get()
  static getGrfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Grf",
  })
  @post("{id}")
  static createGrf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
