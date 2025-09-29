import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cays")
export default class CayController {
  @operation({
    summary: "Get Cays",
  })
  @get()
  static getCays = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cay",
  })
  @post("{id}")
  static createCay = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
