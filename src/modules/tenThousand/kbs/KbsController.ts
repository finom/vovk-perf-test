import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbs")
export default class KbsController {
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
    summary: "Create Kbs",
  })
  @post("{id}")
  static createKbs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
