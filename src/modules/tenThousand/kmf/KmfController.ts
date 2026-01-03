import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmfs")
export default class KmfController {
  @operation({
    summary: "Get Kmfs",
  })
  @get()
  static getKmfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmf",
  })
  @post("{id}")
  static createKmf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
