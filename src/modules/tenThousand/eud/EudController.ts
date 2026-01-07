import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eud")
export default class EudController {
  @operation({
    summary: "Get Eud",
  })
  @get()
  static getEud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eud",
  })
  @post("{id}")
  static createEud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
