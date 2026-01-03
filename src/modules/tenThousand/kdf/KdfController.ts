import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdfs")
export default class KdfController {
  @operation({
    summary: "Get Kdfs",
  })
  @get()
  static getKdfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdf",
  })
  @post("{id}")
  static createKdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
