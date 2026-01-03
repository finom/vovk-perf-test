import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luls")
export default class LulController {
  @operation({
    summary: "Get Luls",
  })
  @get()
  static getLuls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lul",
  })
  @post("{id}")
  static createLul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
