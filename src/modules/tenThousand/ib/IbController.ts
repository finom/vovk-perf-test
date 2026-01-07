import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ib")
export default class IbController {
  @operation({
    summary: "Get Ib",
  })
  @get()
  static getIb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ib",
  })
  @post("{id}")
  static createIb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
