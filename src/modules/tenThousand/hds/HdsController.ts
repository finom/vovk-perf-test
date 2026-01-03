import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hds")
export default class HdsController {
  @operation({
    summary: "Get Hds",
  })
  @get()
  static getHds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hds",
  })
  @post("{id}")
  static createHds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
