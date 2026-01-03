import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyws")
export default class IywController {
  @operation({
    summary: "Get Iyws",
  })
  @get()
  static getIyws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyw",
  })
  @post("{id}")
  static createIyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
