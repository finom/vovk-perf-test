import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfy")
export default class JfyController {
  @operation({
    summary: "Get Jfy",
  })
  @get()
  static getJfy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfy",
  })
  @post("{id}")
  static createJfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
