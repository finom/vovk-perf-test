import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xx")
export default class XxController {
  @operation({
    summary: "Get Xx",
  })
  @get()
  static getXx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xx",
  })
  @post("{id}")
  static createXx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
