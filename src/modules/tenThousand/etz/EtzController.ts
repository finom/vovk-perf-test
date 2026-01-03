import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etzs")
export default class EtzController {
  @operation({
    summary: "Get Etzs",
  })
  @get()
  static getEtzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etz",
  })
  @post("{id}")
  static createEtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
