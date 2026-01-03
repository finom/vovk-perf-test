import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksus")
export default class KsuController {
  @operation({
    summary: "Get Ksus",
  })
  @get()
  static getKsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksu",
  })
  @post("{id}")
  static createKsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
