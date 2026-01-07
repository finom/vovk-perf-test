import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bpr")
export default class BprController {
  @operation({
    summary: "Get Bpr",
  })
  @get()
  static getBpr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bpr",
  })
  @post("{id}")
  static createBpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
