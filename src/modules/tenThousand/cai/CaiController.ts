import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cai")
export default class CaiController {
  @operation({
    summary: "Get Cai",
  })
  @get()
  static getCai = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cai",
  })
  @post("{id}")
  static createCai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
