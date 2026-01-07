import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdb")
export default class CdbController {
  @operation({
    summary: "Get Cdb",
  })
  @get()
  static getCdb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdb",
  })
  @post("{id}")
  static createCdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
