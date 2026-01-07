import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngw")
export default class NgwController {
  @operation({
    summary: "Get Ngw",
  })
  @get()
  static getNgw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngw",
  })
  @post("{id}")
  static createNgw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
