import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atms")
export default class AtmController {
  @operation({
    summary: "Get Atms",
  })
  @get()
  static getAtms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Atm",
  })
  @post("{id}")
  static createAtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
