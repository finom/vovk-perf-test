import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkf")
export default class BkfController {
  @operation({
    summary: "Get Bkf",
  })
  @get()
  static getBkf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkf",
  })
  @post("{id}")
  static createBkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
