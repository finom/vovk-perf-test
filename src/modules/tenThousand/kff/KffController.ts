import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kffs")
export default class KffController {
  @operation({
    summary: "Get Kffs",
  })
  @get()
  static getKffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kff",
  })
  @post("{id}")
  static createKff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
