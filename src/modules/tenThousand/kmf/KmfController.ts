import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmf")
export default class KmfController {
  @operation({
    summary: "Get Kmf",
  })
  @get()
  static getKmf = procedure({
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
