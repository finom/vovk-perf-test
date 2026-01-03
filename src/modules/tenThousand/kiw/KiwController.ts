import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiws")
export default class KiwController {
  @operation({
    summary: "Get Kiws",
  })
  @get()
  static getKiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiw",
  })
  @post("{id}")
  static createKiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
