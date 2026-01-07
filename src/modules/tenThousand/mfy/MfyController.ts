import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mfy")
export default class MfyController {
  @operation({
    summary: "Get Mfy",
  })
  @get()
  static getMfy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mfy",
  })
  @post("{id}")
  static createMfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
