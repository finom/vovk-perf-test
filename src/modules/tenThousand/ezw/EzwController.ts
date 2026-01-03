import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezws")
export default class EzwController {
  @operation({
    summary: "Get Ezws",
  })
  @get()
  static getEzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezw",
  })
  @post("{id}")
  static createEzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
