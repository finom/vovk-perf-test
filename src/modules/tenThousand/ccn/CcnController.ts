import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccn")
export default class CcnController {
  @operation({
    summary: "Get Ccn",
  })
  @get()
  static getCcn = procedure({
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
