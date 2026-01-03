import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnrs")
export default class BnrController {
  @operation({
    summary: "Get Bnrs",
  })
  @get()
  static getBnrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnr",
  })
  @post("{id}")
  static createBnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
