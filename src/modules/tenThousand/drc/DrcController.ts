import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drcs")
export default class DrcController {
  @operation({
    summary: "Get Drcs",
  })
  @get()
  static getDrcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drc",
  })
  @post("{id}")
  static createDrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
