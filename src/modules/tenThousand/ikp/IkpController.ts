import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikps")
export default class IkpController {
  @operation({
    summary: "Get Ikps",
  })
  @get()
  static getIkps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikp",
  })
  @post("{id}")
  static createIkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
