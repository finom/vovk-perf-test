import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqcs")
export default class DqcController {
  @operation({
    summary: "Get Dqcs",
  })
  @get()
  static getDqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqc",
  })
  @post("{id}")
  static createDqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
