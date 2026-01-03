import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ishes")
export default class IshController {
  @operation({
    summary: "Get Ishes",
  })
  @get()
  static getIshes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ish",
  })
  @post("{id}")
  static createIsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
