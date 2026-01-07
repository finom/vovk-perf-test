import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knv")
export default class KnvController {
  @operation({
    summary: "Get Knv",
  })
  @get()
  static getKnv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knv",
  })
  @post("{id}")
  static createKnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
