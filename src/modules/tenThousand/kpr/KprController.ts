import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kprs")
export default class KprController {
  @operation({
    summary: "Get Kprs",
  })
  @get()
  static getKprs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpr",
  })
  @post("{id}")
  static createKpr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
