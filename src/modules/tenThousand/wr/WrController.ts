import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wrs")
export default class WrController {
  @operation({
    summary: "Get Wrs",
  })
  @get()
  static getWrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wr",
  })
  @post("{id}")
  static createWr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
