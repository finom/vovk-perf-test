import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrns")
export default class MrnController {
  @operation({
    summary: "Get Mrns",
  })
  @get()
  static getMrns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrn",
  })
  @post("{id}")
  static createMrn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
