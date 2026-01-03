import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbs")
export default class KbController {
  @operation({
    summary: "Get Kbs",
  })
  @get()
  static getKbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kb",
  })
  @post("{id}")
  static createKb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
