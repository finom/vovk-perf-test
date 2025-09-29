import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjps")
export default class KjpController {
  @operation({
    summary: "Get Kjps",
  })
  @get()
  static getKjps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjp",
  })
  @post("{id}")
  static createKjp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
