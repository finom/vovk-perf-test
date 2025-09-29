import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nits")
export default class NitController {
  @operation({
    summary: "Get Nits",
  })
  @get()
  static getNits = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nit",
  })
  @post("{id}")
  static createNit = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
