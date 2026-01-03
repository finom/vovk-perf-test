import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpies")
export default class JpyController {
  @operation({
    summary: "Get Jpies",
  })
  @get()
  static getJpies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpy",
  })
  @post("{id}")
  static createJpy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
