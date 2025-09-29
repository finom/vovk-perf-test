import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqcs")
export default class KqcController {
  @operation({
    summary: "Get Kqcs",
  })
  @get()
  static getKqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqc",
  })
  @post("{id}")
  static createKqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
