import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwi")
export default class KwiController {
  @operation({
    summary: "Get Kwi",
  })
  @get()
  static getKwi = procedure({
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
