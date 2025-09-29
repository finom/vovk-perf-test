import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eegs")
export default class EegController {
  @operation({
    summary: "Get Eegs",
  })
  @get()
  static getEegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eeg",
  })
  @post("{id}")
  static createEeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
