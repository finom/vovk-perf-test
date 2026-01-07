import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfw")
export default class LfwController {
  @operation({
    summary: "Get Lfw",
  })
  @get()
  static getLfw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfw",
  })
  @post("{id}")
  static createLfw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
