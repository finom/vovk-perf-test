import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpls")
export default class KplController {
  @operation({
    summary: "Get Kpls",
  })
  @get()
  static getKpls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpl",
  })
  @post("{id}")
  static createKpl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
