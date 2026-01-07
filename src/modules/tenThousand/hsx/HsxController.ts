import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsx")
export default class HsxController {
  @operation({
    summary: "Get Hsx",
  })
  @get()
  static getHsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsx",
  })
  @post("{id}")
  static createHsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
