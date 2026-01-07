import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kip")
export default class KipController {
  @operation({
    summary: "Get Kip",
  })
  @get()
  static getKip = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kip",
  })
  @post("{id}")
  static createKip = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
