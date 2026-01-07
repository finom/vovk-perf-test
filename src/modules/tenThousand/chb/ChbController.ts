import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chb")
export default class ChbController {
  @operation({
    summary: "Get Chb",
  })
  @get()
  static getChb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chb",
  })
  @post("{id}")
  static createChb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
