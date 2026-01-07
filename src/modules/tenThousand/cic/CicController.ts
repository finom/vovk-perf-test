import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cic")
export default class CicController {
  @operation({
    summary: "Get Cic",
  })
  @get()
  static getCic = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cic",
  })
  @post("{id}")
  static createCic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
