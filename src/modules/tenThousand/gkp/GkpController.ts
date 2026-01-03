import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkps")
export default class GkpController {
  @operation({
    summary: "Get Gkps",
  })
  @get()
  static getGkps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkp",
  })
  @post("{id}")
  static createGkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
