import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlgs")
export default class NlgController {
  @operation({
    summary: "Get Nlgs",
  })
  @get()
  static getNlgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlg",
  })
  @post("{id}")
  static createNlg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
