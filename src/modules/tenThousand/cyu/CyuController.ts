import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyus")
export default class CyuController {
  @operation({
    summary: "Get Cyus",
  })
  @get()
  static getCyus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cyu",
  })
  @post("{id}")
  static createCyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
