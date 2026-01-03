import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fprs")
export default class FprController {
  @operation({
    summary: "Get Fprs",
  })
  @get()
  static getFprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fpr",
  })
  @post("{id}")
  static createFpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
