import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ird")
export default class IrdController {
  @operation({
    summary: "Get Ird",
  })
  @get()
  static getIrd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ird",
  })
  @post("{id}")
  static createIrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
