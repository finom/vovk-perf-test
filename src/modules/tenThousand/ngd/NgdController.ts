import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngd")
export default class NgdController {
  @operation({
    summary: "Get Ngd",
  })
  @get()
  static getNgd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngd",
  })
  @post("{id}")
  static createNgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
