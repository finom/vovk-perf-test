import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mams")
export default class MamController {
  @operation({
    summary: "Get Mams",
  })
  @get()
  static getMams = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mam",
  })
  @post("{id}")
  static createMam = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
