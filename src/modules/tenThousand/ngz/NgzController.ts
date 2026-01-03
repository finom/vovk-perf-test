import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngzs")
export default class NgzController {
  @operation({
    summary: "Get Ngzs",
  })
  @get()
  static getNgzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngz",
  })
  @post("{id}")
  static createNgz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
