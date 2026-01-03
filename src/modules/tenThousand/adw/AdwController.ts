import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adws")
export default class AdwController {
  @operation({
    summary: "Get Adws",
  })
  @get()
  static getAdws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adw",
  })
  @post("{id}")
  static createAdw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
