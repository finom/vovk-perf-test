import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kow")
export default class KowController {
  @operation({
    summary: "Get Kow",
  })
  @get()
  static getKow = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kow",
  })
  @post("{id}")
  static createKow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
