import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngks")
export default class NgkController {
  @operation({
    summary: "Get Ngks",
  })
  @get()
  static getNgks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngk",
  })
  @post("{id}")
  static createNgk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
