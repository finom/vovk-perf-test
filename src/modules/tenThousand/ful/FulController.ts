import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuls")
export default class FulController {
  @operation({
    summary: "Get Fuls",
  })
  @get()
  static getFuls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ful",
  })
  @post("{id}")
  static createFul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
