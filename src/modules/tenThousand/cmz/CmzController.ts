import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmzs")
export default class CmzController {
  @operation({
    summary: "Get Cmzs",
  })
  @get()
  static getCmzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmz",
  })
  @post("{id}")
  static createCmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
