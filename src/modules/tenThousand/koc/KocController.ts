import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koc")
export default class KocController {
  @operation({
    summary: "Get Koc",
  })
  @get()
  static getKoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koc",
  })
  @post("{id}")
  static createKoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
