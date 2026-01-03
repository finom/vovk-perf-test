import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auus")
export default class AuuController {
  @operation({
    summary: "Get Auus",
  })
  @get()
  static getAuus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auu",
  })
  @post("{id}")
  static createAuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
