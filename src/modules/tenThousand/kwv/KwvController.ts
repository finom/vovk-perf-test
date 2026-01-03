import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwvs")
export default class KwvController {
  @operation({
    summary: "Get Kwvs",
  })
  @get()
  static getKwvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwv",
  })
  @post("{id}")
  static createKwv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
