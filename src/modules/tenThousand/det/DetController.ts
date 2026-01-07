import { procedure, prefix, get, post, operation } from "vovk";

@prefix("det")
export default class DetController {
  @operation({
    summary: "Get Det",
  })
  @get()
  static getDet = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Det",
  })
  @post("{id}")
  static createDet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
