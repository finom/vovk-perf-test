import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnr")
export default class GnrController {
  @operation({
    summary: "Get Gnr",
  })
  @get()
  static getGnr = procedure({
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
