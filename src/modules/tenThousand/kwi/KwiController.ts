import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwis")
export default class KwiController {
  @operation({
    summary: "Get Kwis",
  })
  @get()
  static getKwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwi",
  })
  @post("{id}")
  static createKwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
