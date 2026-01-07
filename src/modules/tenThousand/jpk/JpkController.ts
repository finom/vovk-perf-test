import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpk")
export default class JpkController {
  @operation({
    summary: "Get Jpk",
  })
  @get()
  static getJpk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpk",
  })
  @post("{id}")
  static createJpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
