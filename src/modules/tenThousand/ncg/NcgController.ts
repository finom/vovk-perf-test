import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncg")
export default class NcgController {
  @operation({
    summary: "Get Ncg",
  })
  @get()
  static getNcg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncg",
  })
  @post("{id}")
  static createNcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
