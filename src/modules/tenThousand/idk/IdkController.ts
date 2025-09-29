import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idks")
export default class IdkController {
  @operation({
    summary: "Get Idks",
  })
  @get()
  static getIdks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idk",
  })
  @post("{id}")
  static createIdk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
