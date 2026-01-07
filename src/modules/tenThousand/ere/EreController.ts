import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ere")
export default class EreController {
  @operation({
    summary: "Get Ere",
  })
  @get()
  static getEre = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ere",
  })
  @post("{id}")
  static createEre = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
