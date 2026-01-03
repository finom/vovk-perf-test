import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duls")
export default class DulController {
  @operation({
    summary: "Get Duls",
  })
  @get()
  static getDuls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dul",
  })
  @post("{id}")
  static createDul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
