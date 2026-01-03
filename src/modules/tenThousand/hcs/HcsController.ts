import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcs")
export default class HcsController {
  @operation({
    summary: "Get Hcs",
  })
  @get()
  static getHcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcs",
  })
  @post("{id}")
  static createHcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
