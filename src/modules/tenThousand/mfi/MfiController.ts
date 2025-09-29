import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfis")
export default class MfiController {
  @operation({
    summary: "Get Mfis",
  })
  @get()
  static getMfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfi",
  })
  @post("{id}")
  static createMfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
