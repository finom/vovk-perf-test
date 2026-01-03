import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyls")
export default class IylController {
  @operation({
    summary: "Get Iyls",
  })
  @get()
  static getIyls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyl",
  })
  @post("{id}")
  static createIyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
