import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kov")
export default class KovController {
  @operation({
    summary: "Get Kov",
  })
  @get()
  static getKov = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kov",
  })
  @post("{id}")
  static createKov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
