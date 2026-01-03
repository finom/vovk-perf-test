import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pks")
export default class PkController {
  @operation({
    summary: "Get Pks",
  })
  @get()
  static getPks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pk",
  })
  @post("{id}")
  static createPk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
