import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kms")
export default class KmsController {
  @operation({
    summary: "Get Kms",
  })
  @get()
  static getKms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kms",
  })
  @post("{id}")
  static createKms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
