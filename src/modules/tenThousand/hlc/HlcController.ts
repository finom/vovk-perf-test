import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlc")
export default class HlcController {
  @operation({
    summary: "Get Hlc",
  })
  @get()
  static getHlc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlc",
  })
  @post("{id}")
  static createHlc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
