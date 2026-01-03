import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfs")
export default class HfController {
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
    summary: "Create Hf",
  })
  @post("{id}")
  static createHf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
