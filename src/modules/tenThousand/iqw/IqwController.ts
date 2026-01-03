import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqws")
export default class IqwController {
  @operation({
    summary: "Get Iqws",
  })
  @get()
  static getIqws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqw",
  })
  @post("{id}")
  static createIqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
