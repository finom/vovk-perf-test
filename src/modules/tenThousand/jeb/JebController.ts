import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jebs")
export default class JebController {
  @operation({
    summary: "Get Jebs",
  })
  @get()
  static getJebs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jeb",
  })
  @post("{id}")
  static createJeb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
