import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kkds")
export default class KkdController {
  @operation({
    summary: "Get Kkds",
  })
  @get()
  static getKkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kkd",
  })
  @post("{id}")
  static createKkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
