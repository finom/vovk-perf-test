import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ros")
export default class RoController {
  @operation({
    summary: "Get Ros",
  })
  @get()
  static getRos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ro",
  })
  @post("{id}")
  static createRo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
