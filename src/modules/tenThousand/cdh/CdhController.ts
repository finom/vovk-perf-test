import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdhs")
export default class CdhController {
  @operation({
    summary: "Get Cdhs",
  })
  @get()
  static getCdhs = procedure({
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
