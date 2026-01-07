import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwc")
export default class BwcController {
  @operation({
    summary: "Get Bwc",
  })
  @get()
  static getBwc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwc",
  })
  @post("{id}")
  static createBwc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
