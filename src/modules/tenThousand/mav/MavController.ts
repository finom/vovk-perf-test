import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mavs")
export default class MavController {
  @operation({
    summary: "Get Mavs",
  })
  @get()
  static getMavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mav",
  })
  @post("{id}")
  static createMav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
