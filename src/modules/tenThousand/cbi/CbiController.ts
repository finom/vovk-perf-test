import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbi")
export default class CbiController {
  @operation({
    summary: "Get Cbi",
  })
  @get()
  static getCbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cbi",
  })
  @post("{id}")
  static createCbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
