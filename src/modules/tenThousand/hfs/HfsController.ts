import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfs")
export default class HfsController {
  @operation({
    summary: "Get Hfs",
  })
  @get()
  static getHfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfs",
  })
  @post("{id}")
  static createHfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
