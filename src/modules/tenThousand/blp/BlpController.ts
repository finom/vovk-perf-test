import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blp")
export default class BlpController {
  @operation({
    summary: "Get Blp",
  })
  @get()
  static getBlp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blp",
  })
  @post("{id}")
  static createBlp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
