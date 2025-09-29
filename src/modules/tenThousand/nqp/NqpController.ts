import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqps")
export default class NqpController {
  @operation({
    summary: "Get Nqps",
  })
  @get()
  static getNqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqp",
  })
  @post("{id}")
  static createNqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
