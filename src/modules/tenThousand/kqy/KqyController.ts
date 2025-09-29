import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqies")
export default class KqyController {
  @operation({
    summary: "Get Kqies",
  })
  @get()
  static getKqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqy",
  })
  @post("{id}")
  static createKqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
