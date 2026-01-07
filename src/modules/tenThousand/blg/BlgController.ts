import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blg")
export default class BlgController {
  @operation({
    summary: "Get Blg",
  })
  @get()
  static getBlg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blg",
  })
  @post("{id}")
  static createBlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
