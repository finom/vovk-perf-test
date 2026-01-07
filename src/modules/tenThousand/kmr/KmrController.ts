import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmr")
export default class KmrController {
  @operation({
    summary: "Get Kmr",
  })
  @get()
  static getKmr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kmr",
  })
  @post("{id}")
  static createKmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
