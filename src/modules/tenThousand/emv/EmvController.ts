import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emv")
export default class EmvController {
  @operation({
    summary: "Get Emv",
  })
  @get()
  static getEmv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emv",
  })
  @post("{id}")
  static createEmv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
