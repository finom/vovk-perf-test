import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnes")
export default class MneController {
  @operation({
    summary: "Get Mnes",
  })
  @get()
  static getMnes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mne",
  })
  @post("{id}")
  static createMne = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
