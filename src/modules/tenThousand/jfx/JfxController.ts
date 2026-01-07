import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfx")
export default class JfxController {
  @operation({
    summary: "Get Jfx",
  })
  @get()
  static getJfx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfx",
  })
  @post("{id}")
  static createJfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
