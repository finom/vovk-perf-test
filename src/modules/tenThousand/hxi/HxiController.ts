import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxis")
export default class HxiController {
  @operation({
    summary: "Get Hxis",
  })
  @get()
  static getHxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxi",
  })
  @post("{id}")
  static createHxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
