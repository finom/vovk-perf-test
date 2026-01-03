import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iows")
export default class IowController {
  @operation({
    summary: "Get Iows",
  })
  @get()
  static getIows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iow",
  })
  @post("{id}")
  static createIow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
