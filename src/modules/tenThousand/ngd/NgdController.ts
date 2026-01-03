import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngds")
export default class NgdController {
  @operation({
    summary: "Get Ngds",
  })
  @get()
  static getNgds = procedure({
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
