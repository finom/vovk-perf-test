import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjks")
export default class HjkController {
  @operation({
    summary: "Get Hjks",
  })
  @get()
  static getHjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hjk",
  })
  @post("{id}")
  static createHjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
