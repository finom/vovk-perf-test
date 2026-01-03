import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfs")
export default class JfsController {
  @operation({
    summary: "Get Jfs",
  })
  @get()
  static getJfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfs",
  })
  @post("{id}")
  static createJfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
