import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkp")
export default class BkpController {
  @operation({
    summary: "Get Bkp",
  })
  @get()
  static getBkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkp",
  })
  @post("{id}")
  static createBkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
