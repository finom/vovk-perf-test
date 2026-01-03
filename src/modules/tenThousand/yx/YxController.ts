import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yxes")
export default class YxController {
  @operation({
    summary: "Get Yxes",
  })
  @get()
  static getYxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yx",
  })
  @post("{id}")
  static createYx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
