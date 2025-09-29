import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdis")
export default class CdiController {
  @operation({
    summary: "Get Cdis",
  })
  @get()
  static getCdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdi",
  })
  @post("{id}")
  static createCdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
