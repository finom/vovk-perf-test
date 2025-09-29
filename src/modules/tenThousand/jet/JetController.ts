import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jets")
export default class JetController {
  @operation({
    summary: "Get Jets",
  })
  @get()
  static getJets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jet",
  })
  @post("{id}")
  static createJet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
