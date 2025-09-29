import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enps")
export default class EnpController {
  @operation({
    summary: "Get Enps",
  })
  @get()
  static getEnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Enp",
  })
  @post("{id}")
  static createEnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
