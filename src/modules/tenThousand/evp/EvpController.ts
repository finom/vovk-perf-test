import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evps")
export default class EvpController {
  @operation({
    summary: "Get Evps",
  })
  @get()
  static getEvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evp",
  })
  @post("{id}")
  static createEvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
