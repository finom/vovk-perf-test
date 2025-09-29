import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzcs")
export default class MzcController {
  @operation({
    summary: "Get Mzcs",
  })
  @get()
  static getMzcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzc",
  })
  @post("{id}")
  static createMzc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
