import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlcs")
export default class NlcController {
  @operation({
    summary: "Get Nlcs",
  })
  @get()
  static getNlcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlc",
  })
  @post("{id}")
  static createNlc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
