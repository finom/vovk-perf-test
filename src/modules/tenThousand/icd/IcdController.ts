import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icd")
export default class IcdController {
  @operation({
    summary: "Get Icd",
  })
  @get()
  static getIcd = procedure({
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
