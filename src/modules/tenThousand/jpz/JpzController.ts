import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpz")
export default class JpzController {
  @operation({
    summary: "Get Jpz",
  })
  @get()
  static getJpz = procedure({
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
