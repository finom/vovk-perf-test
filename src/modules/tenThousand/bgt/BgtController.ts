import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgt")
export default class BgtController {
  @operation({
    summary: "Get Bgt",
  })
  @get()
  static getBgt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgt",
  })
  @post("{id}")
  static createBgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
