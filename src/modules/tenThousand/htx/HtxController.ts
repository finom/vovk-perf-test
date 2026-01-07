import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htx")
export default class HtxController {
  @operation({
    summary: "Get Htx",
  })
  @get()
  static getHtx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htx",
  })
  @post("{id}")
  static createHtx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
