import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqps")
export default class FqpController {
  @operation({
    summary: "Get Fqps",
  })
  @get()
  static getFqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqp",
  })
  @post("{id}")
  static createFqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
