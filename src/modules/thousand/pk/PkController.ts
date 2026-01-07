import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pk")
export default class PkController {
  @operation({
    summary: "Get Pk",
  })
  @get()
  static getPk = procedure({
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
