import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bku")
export default class BkuController {
  @operation({
    summary: "Get Bku",
  })
  @get()
  static getBku = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bku",
  })
  @post("{id}")
  static createBku = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
