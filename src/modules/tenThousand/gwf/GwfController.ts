import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwfs")
export default class GwfController {
  @operation({
    summary: "Get Gwfs",
  })
  @get()
  static getGwfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwf",
  })
  @post("{id}")
  static createGwf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
