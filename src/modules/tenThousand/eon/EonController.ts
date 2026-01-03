import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eons")
export default class EonController {
  @operation({
    summary: "Get Eons",
  })
  @get()
  static getEons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eon",
  })
  @post("{id}")
  static createEon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
