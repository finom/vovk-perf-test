import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lprs")
export default class LprController {
  @operation({
    summary: "Get Lprs",
  })
  @get()
  static getLprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpr",
  })
  @post("{id}")
  static createLpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
