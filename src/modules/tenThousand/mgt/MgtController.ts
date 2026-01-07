import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mgt")
export default class MgtController {
  @operation({
    summary: "Get Mgt",
  })
  @get()
  static getMgt = procedure({
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
