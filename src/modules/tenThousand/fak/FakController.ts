import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faks")
export default class FakController {
  @operation({
    summary: "Get Faks",
  })
  @get()
  static getFaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fak",
  })
  @post("{id}")
  static createFak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
