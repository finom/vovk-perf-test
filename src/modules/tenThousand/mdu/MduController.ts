import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mdus")
export default class MduController {
  @operation({
    summary: "Get Mdus",
  })
  @get()
  static getMdus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mdu",
  })
  @post("{id}")
  static createMdu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
