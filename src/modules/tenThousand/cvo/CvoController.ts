import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cvos")
export default class CvoController {
  @operation({
    summary: "Get Cvos",
  })
  @get()
  static getCvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cvo",
  })
  @post("{id}")
  static createCvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
