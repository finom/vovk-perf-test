import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibus")
export default class IbuController {
  @operation({
    summary: "Get Ibus",
  })
  @get()
  static getIbus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibu",
  })
  @post("{id}")
  static createIbu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
