import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feds")
export default class FedController {
  @operation({
    summary: "Get Feds",
  })
  @get()
  static getFeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fed",
  })
  @post("{id}")
  static createFed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
