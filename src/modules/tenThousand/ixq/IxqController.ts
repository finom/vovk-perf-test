import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixq")
export default class IxqController {
  @operation({
    summary: "Get Ixq",
  })
  @get()
  static getIxq = procedure({
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
