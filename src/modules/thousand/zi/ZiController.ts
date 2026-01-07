import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zi")
export default class ZiController {
  @operation({
    summary: "Get Zi",
  })
  @get()
  static getZi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zi",
  })
  @post("{id}")
  static createZi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
