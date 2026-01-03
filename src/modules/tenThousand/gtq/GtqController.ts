import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtqs")
export default class GtqController {
  @operation({
    summary: "Get Gtqs",
  })
  @get()
  static getGtqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtq",
  })
  @post("{id}")
  static createGtq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
