import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksf")
export default class KsfController {
  @operation({
    summary: "Get Ksf",
  })
  @get()
  static getKsf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksf",
  })
  @post("{id}")
  static createKsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
