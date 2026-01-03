import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kmrs")
export default class KmrController {
  @operation({
    summary: "Get Kmrs",
  })
  @get()
  static getKmrs = procedure({
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
