import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emgs")
export default class EmgController {
  @operation({
    summary: "Get Emgs",
  })
  @get()
  static getEmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Emg",
  })
  @post("{id}")
  static createEmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
