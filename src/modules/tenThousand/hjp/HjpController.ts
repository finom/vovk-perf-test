import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjps")
export default class HjpController {
  @operation({
    summary: "Get Hjps",
  })
  @get()
  static getHjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjp",
  })
  @post("{id}")
  static createHjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
