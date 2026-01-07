import { procedure, prefix, get, post, operation } from "vovk";

@prefix("can")
export default class CanController {
  @operation({
    summary: "Get Can",
  })
  @get()
  static getCan = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Can",
  })
  @post("{id}")
  static createCan = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
