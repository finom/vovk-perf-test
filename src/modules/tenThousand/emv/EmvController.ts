import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emvs")
export default class EmvController {
  @operation({
    summary: "Get Emvs",
  })
  @get()
  static getEmvs = procedure({
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
