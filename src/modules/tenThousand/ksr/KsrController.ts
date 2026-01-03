import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksrs")
export default class KsrController {
  @operation({
    summary: "Get Ksrs",
  })
  @get()
  static getKsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksr",
  })
  @post("{id}")
  static createKsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
