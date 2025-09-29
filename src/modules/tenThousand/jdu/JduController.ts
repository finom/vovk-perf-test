import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdus")
export default class JduController {
  @operation({
    summary: "Get Jdus",
  })
  @get()
  static getJdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdu",
  })
  @post("{id}")
  static createJdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
