import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpws")
export default class JpwController {
  @operation({
    summary: "Get Jpws",
  })
  @get()
  static getJpws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpw",
  })
  @post("{id}")
  static createJpw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
