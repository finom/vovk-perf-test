import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlps")
export default class HlpController {
  @operation({
    summary: "Get Hlps",
  })
  @get()
  static getHlps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlp",
  })
  @post("{id}")
  static createHlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
