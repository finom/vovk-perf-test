import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwps")
export default class IwpController {
  @operation({
    summary: "Get Iwps",
  })
  @get()
  static getIwps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwp",
  })
  @post("{id}")
  static createIwp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
