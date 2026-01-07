import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnf")
export default class GnfController {
  @operation({
    summary: "Get Gnf",
  })
  @get()
  static getGnf = procedure({
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
