import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpt")
export default class KptController {
  @operation({
    summary: "Get Kpt",
  })
  @get()
  static getKpt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpt",
  })
  @post("{id}")
  static createKpt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
