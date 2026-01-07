import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gop")
export default class GopController {
  @operation({
    summary: "Get Gop",
  })
  @get()
  static getGop = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gop",
  })
  @post("{id}")
  static createGop = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
