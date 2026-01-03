import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nems")
export default class NemController {
  @operation({
    summary: "Get Nems",
  })
  @get()
  static getNems = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nem",
  })
  @post("{id}")
  static createNem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
