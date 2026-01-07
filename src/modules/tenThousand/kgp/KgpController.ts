import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgp")
export default class KgpController {
  @operation({
    summary: "Get Kgp",
  })
  @get()
  static getKgp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgp",
  })
  @post("{id}")
  static createKgp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
