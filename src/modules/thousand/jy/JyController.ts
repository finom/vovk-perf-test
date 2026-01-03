import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jies")
export default class JyController {
  @operation({
    summary: "Get Jies",
  })
  @get()
  static getJies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jy",
  })
  @post("{id}")
  static createJy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
