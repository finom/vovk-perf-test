import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kocs")
export default class KocController {
  @operation({
    summary: "Get Kocs",
  })
  @get()
  static getKocs = procedure({
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
