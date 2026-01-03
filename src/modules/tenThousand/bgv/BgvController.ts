import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgvs")
export default class BgvController {
  @operation({
    summary: "Get Bgvs",
  })
  @get()
  static getBgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgv",
  })
  @post("{id}")
  static createBgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
