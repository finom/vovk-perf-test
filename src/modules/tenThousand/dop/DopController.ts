import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dops")
export default class DopController {
  @operation({
    summary: "Get Dops",
  })
  @get()
  static getDops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dop",
  })
  @post("{id}")
  static createDop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
