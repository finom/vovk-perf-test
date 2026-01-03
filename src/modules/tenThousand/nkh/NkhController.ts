import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkhs")
export default class NkhController {
  @operation({
    summary: "Get Nkhs",
  })
  @get()
  static getNkhs = procedure({
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
