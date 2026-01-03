import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyys")
export default class KyyController {
  @operation({
    summary: "Get Kyys",
  })
  @get()
  static getKyys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyy",
  })
  @post("{id}")
  static createKyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
