import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksfs")
export default class KsfController {
  @operation({
    summary: "Get Ksfs",
  })
  @get()
  static getKsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksf",
  })
  @post("{id}")
  static createKsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
