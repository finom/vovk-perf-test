import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewq")
export default class EwqController {
  @operation({
    summary: "Get Ewq",
  })
  @get()
  static getEwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewq",
  })
  @post("{id}")
  static createEwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
