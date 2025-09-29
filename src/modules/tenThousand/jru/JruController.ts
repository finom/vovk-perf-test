import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrus")
export default class JruController {
  @operation({
    summary: "Get Jrus",
  })
  @get()
  static getJrus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jru",
  })
  @post("{id}")
  static createJru = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
