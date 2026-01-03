import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngvs")
export default class NgvController {
  @operation({
    summary: "Get Ngvs",
  })
  @get()
  static getNgvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngv",
  })
  @post("{id}")
  static createNgv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
