import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnts")
export default class HntController {
  @operation({
    summary: "Get Hnts",
  })
  @get()
  static getHnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnt",
  })
  @post("{id}")
  static createHnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
