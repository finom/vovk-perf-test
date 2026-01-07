import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncr")
export default class NcrController {
  @operation({
    summary: "Get Ncr",
  })
  @get()
  static getNcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncr",
  })
  @post("{id}")
  static createNcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
