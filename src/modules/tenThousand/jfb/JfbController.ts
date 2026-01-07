import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfb")
export default class JfbController {
  @operation({
    summary: "Get Jfb",
  })
  @get()
  static getJfb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfb",
  })
  @post("{id}")
  static createJfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
