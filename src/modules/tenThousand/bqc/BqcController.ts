import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqcs")
export default class BqcController {
  @operation({
    summary: "Get Bqcs",
  })
  @get()
  static getBqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqc",
  })
  @post("{id}")
  static createBqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
