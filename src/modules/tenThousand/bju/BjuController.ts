import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bju")
export default class BjuController {
  @operation({
    summary: "Get Bju",
  })
  @get()
  static getBju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bju",
  })
  @post("{id}")
  static createBju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
