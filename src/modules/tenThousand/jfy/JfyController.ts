import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfies")
export default class JfyController {
  @operation({
    summary: "Get Jfies",
  })
  @get()
  static getJfies = procedure({
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
