import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icds")
export default class IcdController {
  @operation({
    summary: "Get Icds",
  })
  @get()
  static getIcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icd",
  })
  @post("{id}")
  static createIcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
