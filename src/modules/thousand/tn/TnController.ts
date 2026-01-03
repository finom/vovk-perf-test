import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tns")
export default class TnController {
  @operation({
    summary: "Get Tns",
  })
  @get()
  static getTns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tn",
  })
  @post("{id}")
  static createTn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
