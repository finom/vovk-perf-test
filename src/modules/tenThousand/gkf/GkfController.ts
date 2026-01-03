import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkfs")
export default class GkfController {
  @operation({
    summary: "Get Gkfs",
  })
  @get()
  static getGkfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkf",
  })
  @post("{id}")
  static createGkf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
