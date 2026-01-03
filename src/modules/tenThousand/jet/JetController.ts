import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jets")
export default class JetController {
  @operation({
    summary: "Get Jets",
  })
  @get()
  static getJets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jet",
  })
  @post("{id}")
  static createJet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
