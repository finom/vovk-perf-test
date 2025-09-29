import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hazs")
export default class HazController {
  @operation({
    summary: "Get Hazs",
  })
  @get()
  static getHazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Haz",
  })
  @post("{id}")
  static createHaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
