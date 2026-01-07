import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioj")
export default class IojController {
  @operation({
    summary: "Get Ioj",
  })
  @get()
  static getIoj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioj",
  })
  @post("{id}")
  static createIoj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
