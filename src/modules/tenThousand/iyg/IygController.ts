import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyg")
export default class IygController {
  @operation({
    summary: "Get Iyg",
  })
  @get()
  static getIyg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyg",
  })
  @post("{id}")
  static createIyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
