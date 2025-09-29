import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mscs")
export default class MscController {
  @operation({
    summary: "Get Mscs",
  })
  @get()
  static getMscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msc",
  })
  @post("{id}")
  static createMsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
