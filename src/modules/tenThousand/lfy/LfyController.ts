import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfy")
export default class LfyController {
  @operation({
    summary: "Get Lfy",
  })
  @get()
  static getLfy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfy",
  })
  @post("{id}")
  static createLfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
