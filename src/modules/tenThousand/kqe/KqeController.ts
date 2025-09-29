import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqes")
export default class KqeController {
  @operation({
    summary: "Get Kqes",
  })
  @get()
  static getKqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqe",
  })
  @post("{id}")
  static createKqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
