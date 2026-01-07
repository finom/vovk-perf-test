import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgt")
export default class KgtController {
  @operation({
    summary: "Get Kgt",
  })
  @get()
  static getKgt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgt",
  })
  @post("{id}")
  static createKgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
