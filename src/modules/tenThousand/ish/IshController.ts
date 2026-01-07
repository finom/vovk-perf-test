import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ish")
export default class IshController {
  @operation({
    summary: "Get Ish",
  })
  @get()
  static getIsh = procedure({
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
