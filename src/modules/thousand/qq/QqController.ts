import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qq")
export default class QqController {
  @operation({
    summary: "Get Qq",
  })
  @get()
  static getQq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qq",
  })
  @post("{id}")
  static createQq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
