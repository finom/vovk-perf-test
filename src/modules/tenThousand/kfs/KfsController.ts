import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfs")
export default class KfsController {
  @operation({
    summary: "Get Kfs",
  })
  @get()
  static getKfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfs",
  })
  @post("{id}")
  static createKfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
