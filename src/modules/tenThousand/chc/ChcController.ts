import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chc")
export default class ChcController {
  @operation({
    summary: "Get Chc",
  })
  @get()
  static getChc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chc",
  })
  @post("{id}")
  static createChc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
