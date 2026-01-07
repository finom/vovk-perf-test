import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkh")
export default class NkhController {
  @operation({
    summary: "Get Nkh",
  })
  @get()
  static getNkh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkh",
  })
  @post("{id}")
  static createNkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
