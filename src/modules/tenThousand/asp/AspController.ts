import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asps")
export default class AspController {
  @operation({
    summary: "Get Asps",
  })
  @get()
  static getAsps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asp",
  })
  @post("{id}")
  static createAsp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
