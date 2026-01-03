import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csfs")
export default class CsfController {
  @operation({
    summary: "Get Csfs",
  })
  @get()
  static getCsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csf",
  })
  @post("{id}")
  static createCsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
