import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jms")
export default class JmsController {
  @operation({
    summary: "Get Jms",
  })
  @get()
  static getJms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jms",
  })
  @post("{id}")
  static createJms = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
