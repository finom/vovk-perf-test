import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikp")
export default class IkpController {
  @operation({
    summary: "Get Ikp",
  })
  @get()
  static getIkp = procedure({
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
