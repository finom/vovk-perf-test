import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfls")
export default class KflController {
  @operation({
    summary: "Get Kfls",
  })
  @get()
  static getKfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfl",
  })
  @post("{id}")
  static createKfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
