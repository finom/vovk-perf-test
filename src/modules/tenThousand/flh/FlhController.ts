import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flhs")
export default class FlhController {
  @operation({
    summary: "Get Flhs",
  })
  @get()
  static getFlhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flh",
  })
  @post("{id}")
  static createFlh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
