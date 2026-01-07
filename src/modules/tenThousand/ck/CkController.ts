import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ck")
export default class CkController {
  @operation({
    summary: "Get Ck",
  })
  @get()
  static getCk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ck",
  })
  @post("{id}")
  static createCk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
