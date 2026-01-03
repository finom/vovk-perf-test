import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmps")
export default class GmpController {
  @operation({
    summary: "Get Gmps",
  })
  @get()
  static getGmps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmp",
  })
  @post("{id}")
  static createGmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
