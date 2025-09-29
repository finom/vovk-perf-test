import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzps")
export default class KzpController {
  @operation({
    summary: "Get Kzps",
  })
  @get()
  static getKzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kzp",
  })
  @post("{id}")
  static createKzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
