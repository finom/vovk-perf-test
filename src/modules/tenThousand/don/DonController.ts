import { procedure, prefix, get, post, operation } from "vovk";

@prefix("don")
export default class DonController {
  @operation({
    summary: "Get Don",
  })
  @get()
  static getDon = procedure({
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
