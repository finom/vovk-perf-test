import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kts")
export default class KtsController {
  @operation({
    summary: "Get Kts",
  })
  @get()
  static getKts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kts",
  })
  @post("{id}")
  static createKts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
