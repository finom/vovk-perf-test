import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddis")
export default class DdiController {
  @operation({
    summary: "Get Ddis",
  })
  @get()
  static getDdis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddi",
  })
  @post("{id}")
  static createDdi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
