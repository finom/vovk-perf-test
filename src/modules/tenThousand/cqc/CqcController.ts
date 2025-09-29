import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqcs")
export default class CqcController {
  @operation({
    summary: "Get Cqcs",
  })
  @get()
  static getCqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqc",
  })
  @post("{id}")
  static createCqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
