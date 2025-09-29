import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gyns")
export default class GynController {
  @operation({
    summary: "Get Gyns",
  })
  @get()
  static getGyns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gyn",
  })
  @post("{id}")
  static createGyn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
