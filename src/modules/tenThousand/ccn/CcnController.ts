import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccns")
export default class CcnController {
  @operation({
    summary: "Get Ccns",
  })
  @get()
  static getCcns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccn",
  })
  @post("{id}")
  static createCcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
