import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cffs")
export default class CffController {
  @operation({
    summary: "Get Cffs",
  })
  @get()
  static getCffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cff",
  })
  @post("{id}")
  static createCff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
