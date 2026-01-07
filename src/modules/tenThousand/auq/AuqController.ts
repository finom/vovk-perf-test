import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auq")
export default class AuqController {
  @operation({
    summary: "Get Auq",
  })
  @get()
  static getAuq = procedure({
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
