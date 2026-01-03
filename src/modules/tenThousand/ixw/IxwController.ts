import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixws")
export default class IxwController {
  @operation({
    summary: "Get Ixws",
  })
  @get()
  static getIxws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixw",
  })
  @post("{id}")
  static createIxw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
