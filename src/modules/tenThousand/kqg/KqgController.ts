import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqgs")
export default class KqgController {
  @operation({
    summary: "Get Kqgs",
  })
  @get()
  static getKqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqg",
  })
  @post("{id}")
  static createKqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
