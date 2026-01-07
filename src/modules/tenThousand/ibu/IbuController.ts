import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibu")
export default class IbuController {
  @operation({
    summary: "Get Ibu",
  })
  @get()
  static getIbu = procedure({
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
