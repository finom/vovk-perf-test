import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msds")
export default class MsdController {
  @operation({
    summary: "Get Msds",
  })
  @get()
  static getMsds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msd",
  })
  @post("{id}")
  static createMsd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
