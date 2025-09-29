import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkks")
export default class KkkController {
  @operation({
    summary: "Get Kkks",
  })
  @get()
  static getKkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkk",
  })
  @post("{id}")
  static createKkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
