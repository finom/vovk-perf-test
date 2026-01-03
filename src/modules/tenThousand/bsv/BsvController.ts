import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsvs")
export default class BsvController {
  @operation({
    summary: "Get Bsvs",
  })
  @get()
  static getBsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsv",
  })
  @post("{id}")
  static createBsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
