import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccr")
export default class CcrController {
  @operation({
    summary: "Get Ccr",
  })
  @get()
  static getCcr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccr",
  })
  @post("{id}")
  static createCcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
