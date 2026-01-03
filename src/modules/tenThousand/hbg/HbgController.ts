import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbgs")
export default class HbgController {
  @operation({
    summary: "Get Hbgs",
  })
  @get()
  static getHbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbg",
  })
  @post("{id}")
  static createHbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
