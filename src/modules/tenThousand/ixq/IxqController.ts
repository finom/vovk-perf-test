import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixqs")
export default class IxqController {
  @operation({
    summary: "Get Ixqs",
  })
  @get()
  static getIxqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ixq",
  })
  @post("{id}")
  static createIxq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
