import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqds")
export default class KqdController {
  @operation({
    summary: "Get Kqds",
  })
  @get()
  static getKqds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqd",
  })
  @post("{id}")
  static createKqd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
