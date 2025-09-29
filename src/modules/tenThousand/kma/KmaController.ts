import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmas")
export default class KmaController {
  @operation({
    summary: "Get Kmas",
  })
  @get()
  static getKmas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kma",
  })
  @post("{id}")
  static createKma = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
