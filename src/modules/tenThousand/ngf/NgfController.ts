import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngfs")
export default class NgfController {
  @operation({
    summary: "Get Ngfs",
  })
  @get()
  static getNgfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngf",
  })
  @post("{id}")
  static createNgf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
