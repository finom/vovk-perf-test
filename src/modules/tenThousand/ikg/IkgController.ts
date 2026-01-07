import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikg")
export default class IkgController {
  @operation({
    summary: "Get Ikg",
  })
  @get()
  static getIkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikg",
  })
  @post("{id}")
  static createIkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
