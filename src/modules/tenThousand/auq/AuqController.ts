import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auqs")
export default class AuqController {
  @operation({
    summary: "Get Auqs",
  })
  @get()
  static getAuqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auq",
  })
  @post("{id}")
  static createAuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
