import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksm")
export default class KsmController {
  @operation({
    summary: "Get Ksm",
  })
  @get()
  static getKsm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksm",
  })
  @post("{id}")
  static createKsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
