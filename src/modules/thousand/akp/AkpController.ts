import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akps")
export default class AkpController {
  @operation({
    summary: "Get Akps",
  })
  @get()
  static getAkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akp",
  })
  @post("{id}")
  static createAkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
