import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbs")
export default class MbController {
  @operation({
    summary: "Get Mbs",
  })
  @get()
  static getMbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mb",
  })
  @post("{id}")
  static createMb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
