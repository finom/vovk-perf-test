import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avbs")
export default class AvbController {
  @operation({
    summary: "Get Avbs",
  })
  @get()
  static getAvbs = procedure({
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
