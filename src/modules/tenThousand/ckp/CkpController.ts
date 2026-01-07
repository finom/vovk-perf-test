import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckp")
export default class CkpController {
  @operation({
    summary: "Get Ckp",
  })
  @get()
  static getCkp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckp",
  })
  @post("{id}")
  static createCkp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
