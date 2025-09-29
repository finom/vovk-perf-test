import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbes")
export default class GbeController {
  @operation({
    summary: "Get Gbes",
  })
  @get()
  static getGbes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbe",
  })
  @post("{id}")
  static createGbe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
