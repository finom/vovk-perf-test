import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdh")
export default class CdhController {
  @operation({
    summary: "Get Cdh",
  })
  @get()
  static getCdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdh",
  })
  @post("{id}")
  static createCdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
