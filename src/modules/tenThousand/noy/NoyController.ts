import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("noys")
export default class NoyController {
  @operation({
    summary: "Get Noys",
  })
  @get()
  static getNoys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Noy",
  })
  @post("{id}")
  static createNoy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
