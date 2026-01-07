import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xy")
export default class XyController {
  @operation({
    summary: "Get Xy",
  })
  @get()
  static getXy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xy",
  })
  @post("{id}")
  static createXy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
