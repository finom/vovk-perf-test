import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htfs")
export default class HtfController {
  @operation({
    summary: "Get Htfs",
  })
  @get()
  static getHtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htf",
  })
  @post("{id}")
  static createHtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
