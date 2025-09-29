import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgs")
export default class MgsController {
  @operation({
    summary: "Get Mgs",
  })
  @get()
  static getMgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgs",
  })
  @post("{id}")
  static createMgs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
