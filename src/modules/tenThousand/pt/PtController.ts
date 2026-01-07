import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pt")
export default class PtController {
  @operation({
    summary: "Get Pt",
  })
  @get()
  static getPt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pt",
  })
  @post("{id}")
  static createPt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
