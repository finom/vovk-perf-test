import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsrs")
export default class LsrController {
  @operation({
    summary: "Get Lsrs",
  })
  @get()
  static getLsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsr",
  })
  @post("{id}")
  static createLsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
