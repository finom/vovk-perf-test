import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hches")
export default class HchController {
  @operation({
    summary: "Get Hches",
  })
  @get()
  static getHches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hch",
  })
  @post("{id}")
  static createHch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
