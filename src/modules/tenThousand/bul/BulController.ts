import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buls")
export default class BulController {
  @operation({
    summary: "Get Buls",
  })
  @get()
  static getBuls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bul",
  })
  @post("{id}")
  static createBul = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
