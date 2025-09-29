import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jals")
export default class JalController {
  @operation({
    summary: "Get Jals",
  })
  @get()
  static getJals = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jal",
  })
  @post("{id}")
  static createJal = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
