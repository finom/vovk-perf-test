import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clt")
export default class CltController {
  @operation({
    summary: "Get Clt",
  })
  @get()
  static getClt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clt",
  })
  @post("{id}")
  static createClt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
