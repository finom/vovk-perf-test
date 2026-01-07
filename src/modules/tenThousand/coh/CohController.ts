import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coh")
export default class CohController {
  @operation({
    summary: "Get Coh",
  })
  @get()
  static getCoh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Coh",
  })
  @post("{id}")
  static createCoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
