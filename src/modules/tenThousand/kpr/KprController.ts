import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpr")
export default class KprController {
  @operation({
    summary: "Get Kpr",
  })
  @get()
  static getKpr = procedure({
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
