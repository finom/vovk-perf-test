import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cds")
export default class CdController {
  @operation({
    summary: "Get Cds",
  })
  @get()
  static getCds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cd",
  })
  @post("{id}")
  static createCd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
