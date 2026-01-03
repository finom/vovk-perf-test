import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpzs")
export default class JpzController {
  @operation({
    summary: "Get Jpzs",
  })
  @get()
  static getJpzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpz",
  })
  @post("{id}")
  static createJpz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
