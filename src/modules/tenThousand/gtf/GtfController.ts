import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtf")
export default class GtfController {
  @operation({
    summary: "Get Gtf",
  })
  @get()
  static getGtf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtf",
  })
  @post("{id}")
  static createGtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
