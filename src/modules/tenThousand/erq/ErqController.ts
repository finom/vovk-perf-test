import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erqs")
export default class ErqController {
  @operation({
    summary: "Get Erqs",
  })
  @get()
  static getErqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erq",
  })
  @post("{id}")
  static createErq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
