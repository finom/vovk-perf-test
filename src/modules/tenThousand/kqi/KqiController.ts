import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqis")
export default class KqiController {
  @operation({
    summary: "Get Kqis",
  })
  @get()
  static getKqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqi",
  })
  @post("{id}")
  static createKqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
