import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqps")
export default class GqpController {
  @operation({
    summary: "Get Gqps",
  })
  @get()
  static getGqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqp",
  })
  @post("{id}")
  static createGqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
