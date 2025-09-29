import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msbs")
export default class MsbController {
  @operation({
    summary: "Get Msbs",
  })
  @get()
  static getMsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msb",
  })
  @post("{id}")
  static createMsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
