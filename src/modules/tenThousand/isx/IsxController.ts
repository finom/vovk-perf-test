import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isx")
export default class IsxController {
  @operation({
    summary: "Get Isx",
  })
  @get()
  static getIsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isx",
  })
  @post("{id}")
  static createIsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
