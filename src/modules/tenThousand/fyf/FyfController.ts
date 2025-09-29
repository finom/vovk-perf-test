import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fyfs")
export default class FyfController {
  @operation({
    summary: "Get Fyfs",
  })
  @get()
  static getFyfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fyf",
  })
  @post("{id}")
  static createFyf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
