import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gties")
export default class GtyController {
  @operation({
    summary: "Get Gties",
  })
  @get()
  static getGties = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gty",
  })
  @post("{id}")
  static createGty = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
