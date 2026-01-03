import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgts")
export default class MgtController {
  @operation({
    summary: "Get Mgts",
  })
  @get()
  static getMgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mgt",
  })
  @post("{id}")
  static createMgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
