import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mbfs")
export default class MbfController {
  @operation({
    summary: "Get Mbfs",
  })
  @get()
  static getMbfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mbf",
  })
  @post("{id}")
  static createMbf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
