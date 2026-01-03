import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hags")
export default class HagController {
  @operation({
    summary: "Get Hags",
  })
  @get()
  static getHags = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hag",
  })
  @post("{id}")
  static createHag = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
