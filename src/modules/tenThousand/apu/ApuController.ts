import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("apus")
export default class ApuController {
  @operation({
    summary: "Get Apus",
  })
  @get()
  static getApus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Apu",
  })
  @post("{id}")
  static createApu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
