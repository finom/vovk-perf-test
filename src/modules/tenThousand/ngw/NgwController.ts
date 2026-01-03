import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngws")
export default class NgwController {
  @operation({
    summary: "Get Ngws",
  })
  @get()
  static getNgws = procedure({
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
