import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlps")
export default class NlpController {
  @operation({
    summary: "Get Nlps",
  })
  @get()
  static getNlps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlp",
  })
  @post("{id}")
  static createNlp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
