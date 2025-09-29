import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehas")
export default class EhaController {
  @operation({
    summary: "Get Ehas",
  })
  @get()
  static getEhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eha",
  })
  @post("{id}")
  static createEha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
