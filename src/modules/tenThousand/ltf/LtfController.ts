import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltfs")
export default class LtfController {
  @operation({
    summary: "Get Ltfs",
  })
  @get()
  static getLtfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ltf",
  })
  @post("{id}")
  static createLtf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
