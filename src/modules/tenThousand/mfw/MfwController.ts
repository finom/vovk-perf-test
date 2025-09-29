import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mfws")
export default class MfwController {
  @operation({
    summary: "Get Mfws",
  })
  @get()
  static getMfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mfw",
  })
  @post("{id}")
  static createMfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
