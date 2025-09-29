import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byps")
export default class BypController {
  @operation({
    summary: "Get Byps",
  })
  @get()
  static getByps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byp",
  })
  @post("{id}")
  static createByp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
