import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kips")
export default class KipController {
  @operation({
    summary: "Get Kips",
  })
  @get()
  static getKips = procedure({
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
