import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnrs")
export default class GnrController {
  @operation({
    summary: "Get Gnrs",
  })
  @get()
  static getGnrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnr",
  })
  @post("{id}")
  static createGnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
