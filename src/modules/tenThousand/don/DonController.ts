import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dons")
export default class DonController {
  @operation({
    summary: "Get Dons",
  })
  @get()
  static getDons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Don",
  })
  @post("{id}")
  static createDon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
