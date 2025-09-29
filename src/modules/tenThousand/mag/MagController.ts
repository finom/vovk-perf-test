import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mags")
export default class MagController {
  @operation({
    summary: "Get Mags",
  })
  @get()
  static getMags = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mag",
  })
  @post("{id}")
  static createMag = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
