import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckx")
export default class CkxController {
  @operation({
    summary: "Get Ckx",
  })
  @get()
  static getCkx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckx",
  })
  @post("{id}")
  static createCkx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
