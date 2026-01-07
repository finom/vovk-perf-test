import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avb")
export default class AvbController {
  @operation({
    summary: "Get Avb",
  })
  @get()
  static getAvb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avb",
  })
  @post("{id}")
  static createAvb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
