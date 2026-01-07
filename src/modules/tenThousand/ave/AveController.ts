import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ave")
export default class AveController {
  @operation({
    summary: "Get Ave",
  })
  @get()
  static getAve = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ave",
  })
  @post("{id}")
  static createAve = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
