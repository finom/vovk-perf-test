import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xxes")
export default class XxController {
  @operation({
    summary: "Get Xxes",
  })
  @get()
  static getXxes = procedure({
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
