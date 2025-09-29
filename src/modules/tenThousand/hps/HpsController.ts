import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hps")
export default class HpsController {
  @operation({
    summary: "Get Hps",
  })
  @get()
  static getHps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hps",
  })
  @post("{id}")
  static createHps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
