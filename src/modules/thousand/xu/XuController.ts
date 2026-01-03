import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xus")
export default class XuController {
  @operation({
    summary: "Get Xus",
  })
  @get()
  static getXus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xu",
  })
  @post("{id}")
  static createXu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
