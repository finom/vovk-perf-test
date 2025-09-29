import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqzs")
export default class KqzController {
  @operation({
    summary: "Get Kqzs",
  })
  @get()
  static getKqzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqz",
  })
  @post("{id}")
  static createKqz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
