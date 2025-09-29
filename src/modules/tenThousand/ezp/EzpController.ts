import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezps")
export default class EzpController {
  @operation({
    summary: "Get Ezps",
  })
  @get()
  static getEzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezp",
  })
  @post("{id}")
  static createEzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
