import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrp")
export default class MrpController {
  @operation({
    summary: "Get Mrp",
  })
  @get()
  static getMrp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrp",
  })
  @post("{id}")
  static createMrp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
