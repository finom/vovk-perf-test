import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmg")
export default class KmgController {
  @operation({
    summary: "Get Kmg",
  })
  @get()
  static getKmg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmg",
  })
  @post("{id}")
  static createKmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
