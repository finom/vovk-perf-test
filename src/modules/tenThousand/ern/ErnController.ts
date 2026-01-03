import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erns")
export default class ErnController {
  @operation({
    summary: "Get Erns",
  })
  @get()
  static getErns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ern",
  })
  @post("{id}")
  static createErn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
