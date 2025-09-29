import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cazs")
export default class CazController {
  @operation({
    summary: "Get Cazs",
  })
  @get()
  static getCazs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Caz",
  })
  @post("{id}")
  static createCaz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
