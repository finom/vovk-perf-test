import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avjs")
export default class AvjController {
  @operation({
    summary: "Get Avjs",
  })
  @get()
  static getAvjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avj",
  })
  @post("{id}")
  static createAvj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
