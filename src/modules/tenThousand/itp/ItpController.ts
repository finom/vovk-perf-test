import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itps")
export default class ItpController {
  @operation({
    summary: "Get Itps",
  })
  @get()
  static getItps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itp",
  })
  @post("{id}")
  static createItp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
