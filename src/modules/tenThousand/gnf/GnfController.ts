import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnfs")
export default class GnfController {
  @operation({
    summary: "Get Gnfs",
  })
  @get()
  static getGnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnf",
  })
  @post("{id}")
  static createGnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
